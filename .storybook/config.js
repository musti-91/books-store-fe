import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
// automatically import all files ending in *.stories.js
configure( require.context( '../src/components/', true, /\.story\.js$/ ), module );
addDecorator( withKnobs );
addDecorator( withInfo );