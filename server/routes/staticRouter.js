const express = require("express")


const router= express.Router()

router.get("/", (req, res)=>{
    res.render("home")
})

router.get("/userinfo", (req, res) => {
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  });

module.exports = router;