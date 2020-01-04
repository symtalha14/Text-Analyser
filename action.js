window.onload=()=>{

    var textArea = document.querySelector('textarea');
    var letterCount = document.querySelector('#letter-count');
    var wordCount = document.querySelector('#word-count');
    var sentenceCount = document.querySelector('#sentence-count');
    var letters=0;var words=0;var sentences=0;var wPs=0;
    if(textArea.value!=''){
       
        analyseText(textArea.value);
    }
    textArea.onkeyup=()=>{
        //not empty
        if(textArea.value!=''){
            
        analyseText(textArea.value);
           
        }else{
            //setting to initial
            wordCount.innerText=0;
            letterCount.innerText=0;
            sentenceCount.innerText=0;
            document.querySelector('#wpl').innerText = 0;
        }
      
    }

    function analyseText(text){
       if(text==''){
                //setting to initial
                wordCount.innerText=0;
                letterCount.innerText=0;
                sentenceCount.innerText=0;
                document.querySelector('#wpl').innerText = 0;
                return;
        }
        letters=0;words=0;sentences=0;
        var wpl=0;
        var lines = text.split('\n');
        sentences = lines.length;
        sentenceCount.innerText = sentences;
        for(let i=0;i<lines.length;i++){
            var count_words = lines[i].split(' ');
            for(let m=0;m<count_words.length;m++){
                if(count_words[m].length>1){
                    words+=1;
                }
            }
            for(let j=0;j<count_words.length;j++){
                letters+=count_words[j].length;
                
            }
            console.log(count_words);
            
        }
        letterCount.innerText = letters;
        wordCount.innerText = words;
        wpl = Math.round(words/sentences);
        document.querySelector('#wpl').innerText = wpl;
    }

    function clear(){
    textArea.value='';
    analyseText('');
     
    }
    function redo(){
      analyseText(textArea.value);
       
    }
    function copy(){
    

        textArea.select();
        document.execCommand('copy');
       
        document.querySelector('.tooltip-text.copy').innerText = 'Copied';
        setTimeout((e)=>{
            document.querySelector('.tooltip-text.copy').innerText = 'Copy text';

        },2000);
    }

    document.addEventListener('click', (e)=>{
        if(e.target.matches('.copy-btn')){copy();
            
        }
        if(e.target.matches('.redo-btn')){redo();
        
        }
        if(e.target.matches('.clear-btn')){
            clear();
          
        }
    });

}