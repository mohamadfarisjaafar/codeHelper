<template>
    <div class="code-assistant-container">
      <h1>Code Bug Explanation Assistant</h1>
      
      <!-- Code Input -->
      <textarea v-model="codeInput" placeholder="Paste your code here..." rows="10" cols="50"></textarea>
      
      <!-- Submit Button -->
      <button @click="getErrorExplanation">Explain Bug</button>
      
      <!-- Error Explanation -->
      <div v-if="errorExplanation">
        <h2>Error Explanation</h2>
        <pre>{{ errorExplanation }}</pre>
      </div>
  
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="loading">Loading...</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        codeInput: '',
        errorExplanation: '',
        isLoading: false,
      };
    },
    methods: {
      async getErrorExplanation() {
        if (!this.codeInput.trim()) {
          alert("Please paste some code!");
          return;
        }
  
        this.isLoading = true;
        try {
          const response = await fetch('http://localhost:3000/explain-bug', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: this.codeInput }),
          });
  
          const data = await response.json();
          this.errorExplanation = data.explanation;
        } catch (error) {
          console.error('Error:', error);
          alert('Error explaining the bug!');
        } finally {
          this.isLoading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    font-family: monospace;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  pre {
    background-color: #f4f4f4;
    padding: 10px;
  }
  
  .loading {
    font-size: 20px;
    color: blue;
    margin-top: 20px;
  }
  </style>
  