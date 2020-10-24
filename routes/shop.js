const express = require("express");

const router = express.Router();

// THIS WILL BE AVAILBLE OR THE FRONT SIDE OF THE SHOP>.....So with our functionality, I am thinking that most of this code will be only used for admin sided operations, no shop  so feel free to wipe all of this code or used it for component inspiration?  I just needed to have some functionality to continue for my mind to work. SORRY.


router.get('/', (req, res, next) => {
    res.send(
        '<h3>ANOTHER PART OF THE C.R.U.D NEEDS FOR PROJECT REQUIREMENTS TO BE MET</h3>'
    );
});

module.exports = router;