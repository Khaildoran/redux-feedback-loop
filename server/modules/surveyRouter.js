

router.post('/',  (req, res) => {
  let surveyResult = req.body;
  console.log(`Adding result`, surveyResult);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, surveyResult)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new survey results`, error);
      res.sendStatus(500);
    });
});
