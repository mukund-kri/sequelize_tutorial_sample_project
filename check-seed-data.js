// List all the records in the question table


const { Question } = require('./models');

(async () => {
    const questions = await Question.findAll();
    console.log(questions.map(question => question.toJSON()));
    process.exit();
})();

