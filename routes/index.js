const router = require("express").Router();
const Impression = require("../models/Impression");

router.get("/", async (req, res) => {
  const { source_url, target_url, isClick } = req.query;
  try {
    await Impression.create({
      target_url,
      source_url,
      isClick,
    });
    res.redirect(target_url);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/details", async (req, res) => {
  const total = await Impression.findAll();
  res.json(total);
});

router.get("/summary", async (req, res) => {
  const total = await Impression.findAll();
  const impressions = total.filter((elem) => !elem.isClick).length;
  const clicks = total.length - impressions;

  const summary = {
    clicks,
    impressions,
  };

  res.json(summary);
});

module.exports = router;
