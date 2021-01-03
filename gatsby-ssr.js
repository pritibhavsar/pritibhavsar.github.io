/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import { withPrefix } from "gatsby";
const React = require("react")

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    setHeadComponents([
        <script src={withPrefix('./assets/js/bootstrap.min.js')} type="text/javascript" />,
        <script src={withPrefix('./assets/js/wow.js')} type="text/javascript" />,
        <script src={withPrefix('./assets/js/owl.js')} type="text/javascript" />,
        <script src={withPrefix('./assets/js/main.js')} type="text/javascript" />,
        <script src={withPrefix('./assets/js/common.js')} type="text/javascript" />
    ])
  }