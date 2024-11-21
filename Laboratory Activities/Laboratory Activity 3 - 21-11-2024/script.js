document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value.trim();
    
    // Calculate word count
    const words = text.split(/\s+/).filter(word => word.length > 0);
    document.getElementById('wordcount').textContent = `Words: ${words.length}`;
    
    // Calculate sentence count
    const sentences = text.split(/[.!?]+\s*/).filter(sentence => sentence.length > 0);
    document.getElementById('sentenceCount').textContent = `Sentences: ${sentences.length}`;
});