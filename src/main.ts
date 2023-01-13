//
// Assets
//

// import dinâmico de images (pasta assets)
require.context("./assets/images/", true, /.(png|jpe?g|svg|gif)$/);

// import dinâmico de videos
// require.context("./assets/videos/", true, /.(mp4|webm)$/);

// import dinâmico de fonts
// require.context("./assets/webfonts/", true, /\.(ttf|woff|woff2|eot|svg)$/);

// Vendors
import "./vendors/styles.scss";
import "./vendors";

// Styles
import "./styles/styles.scss";

// Components
import "./components/styles.scss";
import "./components";
