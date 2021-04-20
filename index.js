import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const images = {
    image0: require('./assets/anonymous.jpg'),
    image1: require('./assets/bienfu.png'),
    image2: require('./assets/dog.jpg'),
    image3: require('./assets/mancake.png'),
    image4: require('./assets/lol.jpg'),
    image5: require('./assets/lol2020.png'),
    image6: require('./assets/monke.jpg'),
    image7: require('./assets/pandra.png'),
    image8: require('./assets/Orange-black-skull.jpg'),
    image9: require('./assets/splash.png')
};

export default images;