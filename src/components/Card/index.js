// @flow
import React, { type Node } from "react";
import { animated, useSpring } from "react-spring";
// $FlowFixMe: scss files
import "./card.scss";
// mock photo
import { type Book } from "../../data.d";
import photo from "../../styles/images/island_of_fog.jpg";
/**
 * @author
 * @function Card
 **/

type Props = {
    book: Book,
    children?: Node,
};
const Card = ({ children, book }: Props) => {
    const [isShown, setShown] = React.useState(false);
    const styles = useSpring({
        height: isShown ? "75%" : "100%",
        from: { height: "100%" },
    });

    React.useEffect(() => {
        setShown(true);
    }, []);
    return (
        <div className={"card"} onClick={() => setShown(!isShown)}>
            <animated.div style={styles} className="cover">
                <img
                    src={book && book.coverPicture ? book.coverPicture : photo}
                    alt={book && `${book.name}-cover`}
                />
            </animated.div>
            {/* change to icon */}
            <div className={"menu"} onClick={() => setShown(!isShown)}>
                ...
            </div>
            {/* Details for book */}
            {isShown && book && (
                <div>
                    <div className={"detail"}>
                        <div className={"title"}>[]: {book.published}</div>
                        <div className={"info"}>[]:{book.rating}</div>
                        <div className={"pages"}>[]: {book.pages}</div>
                        <div className={"languages"}>
                            []:
                            {book.languages.map(ln =>
                                ln.substring(0, 2).toUpperCase(),
                            )}
                        </div>
                        <div className={"awards"}>
                            []:
                            {book.awards.map(ar => ar)}
                        </div>
                        <div className="genre">
                            []: {book.genre && book.genre.name}
                        </div>
                        <div className={"awards"}>[]: {"Nobel"}</div>
                        <div className="genre">[]: {"Something"}</div>
                    </div>
                </div>
            )}
            {/* eslint-disable react/no-unescaped-entities */}
            {isShown && !book && (
                <div className="error">Can't get Book Detail</div>
            )}
            {children}
        </div>
    );
};

export default Card;
