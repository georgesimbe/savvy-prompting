const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

router.post('/evaluate', async (req, res) => {
  const { prompts } = req.body;

  if (!prompts || !Array.isArray(prompts)) {
    return res.status(400).json({ error: 'Invalid prompts array' });
  }

  const pythonProcess = spawn('python', ['../../promptbench_demo.py', JSON.stringify(prompts)]);

  let result = '';
  let error = '';

  pythonProcess.stdout.on('data', (data) => {
    result += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    error += data.toString();
  });

  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      return res.status(500).json({ error: `PromptBench evaluation failed: ${error}` });
    }

    try {
      const evaluationResults = JSON.parse(result);
      res.json(evaluationResults);
    } catch (err) {
      res.status(500).json({ error: 'Failed to parse PromptBench results' });
    }
  });
});

module.exports = router;