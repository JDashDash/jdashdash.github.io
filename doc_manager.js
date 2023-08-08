const divGauche = document.getElementById('divGauche');
const divDroite = document.getElementById('divDroite');

const startButton = document.getElementById('start');
const printButton = document.getElementById('print');
const typesButton = document.getElementById('types');
const varsButton = document.getElementById('vars');
const funcsButton = document.getElementById('funcs');
const strModuleButton = document.getElementById('strmodule');
const boolModuleButton = document.getElementById('boolmodule');
const intModuleButton = document.getElementById('intmodule');
const doubleModuleButton = document.getElementById('doublemodule');
const importButton = document.getElementById('import');
const protected_private_public = document.getElementById('protected_private_public');
const namespaceButton = document.getElementById('namespaces');
const condOperatorsButton = document.getElementById('condoperator');
const conditionsButton = document.getElementById('conditions');
const switchButton = document.getElementById('switch');
const loopsButton = document.getElementById('loops');

const contentRight = {
    start: "<p>J-- (J Dash Dash) is an interpreted, non-object-oriented programming language inspired by the C++ language and the very famous Java.<br>" +
        "To start, you have to download the interpreter: <a href=\"https://github.com/JDashDash/J--\">https://github.com/JDashDash/J--</a><br><br>" +
        "The interpreter is the tool that will check your code and do actions it depends on what you are asking for it.<br><br>" +
        "Once you downloaded it, you can now code in J--! To interprete your code, you have to open a terminal, " +
        "call the interpreter with the path to the file with the extension <code>.jdd</code>" +
        "</p>",
    print: "<p>In J-- there are two styles of print : <instruction2_blue>print</instruction2_blue> and <instruction2_blue>println</instruction2_blue>. We will start with print:" +
        "<pre>" +
        "<code><instruction2_blue>print</instruction2_blue> ( <value_orange>VALUE</value_orange> ) ; </code>" +
        "</pre>" +
        "- <code>print</code> is the instruction, <code>(</code> and <code>)</code> are operators to include your value <br>" +
        "- <code>VALUE</code> is your value you have to give between these operators <br>" +
        "- <code>;</code> is the final operator to conclude your instruction <br><br><br>" +
        "<pre>" +
        "<code><instruction2_blue>println</instruction2_blue> ( <value_orange>VALUE</value_orange> ) ; </code>" +
        "</pre>" +
        "- <code>println</code> is the instruction, <code>(</code> and <code>)</code> are operators to include your value <br>" +
        "- <code>VALUE</code> is your value you have to give between these operators (we will speak about values later) <br>" +
        "- <code>;</code> is the final operator to conclude your instruction <br><br><br><br>" +
        "To explain what's the difference, I will show you an example: <br>" +
        "<code>print(\"Hello World \\n\");</code><br>" +
        "<code>println(\"Hello World\");</code><br>" +
        "If you do not know why there is '\\n' in the instruction, it to go to the next line, it's a jump in strings. We will speak about it later.<br><br>" +
        "The print instructions are a way to show an output in your terminal. In J-- you can give a string, double, int " +
        "or a boolean value (it can come from a variable, return value from a function or a classic value like in the example)." +
        "</p>",
    types: "<p>" +
        "In J--, there is four types: <code>int</code>, <code>double</code>, <code>string</code>, <code>boolean</code>.<br>" +
        "A type in a programming language gives information about the value that it expects. For example, if you want something with an int in a case, we specify we are waiting an int in return. <br>" +
        "In this programming language, you have to give a type for a function or a variable. You'll see it later. <br>" +
        "By the way, in the language you can see modules, but it will be for next courses :)." +
        "</p>",
    vars: "<p>" +
        "A variable is saved in your memory, it contains a name and a value. We can use and change it with the name given. <br>" +
        "In J--, a variable can have a lot of states: not mutable, protected, private, public or normal. <br>" +
        "In this course, we will speak about const and normal variables. We will speak about protected, private and public later. <br> <br>" +
        "Format: <br>" +
        "<pre>" +
        "<code><instruction2_blue>TYPE</instruction2_blue> NAME = <value_orange>VALUE</value_orange> ;</code> <br>" +
        "- <code>TYPE</code> is the type you give to your variable, it's important to say what you expect in her value. <br>" +
        "- <code>NAME</code> is the name of your variable, no space or number in the name! If you want to add a space, use <code>_</code> and for numbers, tell it in letter. <br>" +
        "- <code>=</code> is an operator to introduce the value of your variable. <br>" +
        "- <code>VALUE</code> is the value saved in your variable and in your memory, the value have to correct, it means the type of your value have to be equal to the type of the variable. <br>" +
        "- <code>;</code> is the final operator to conclude your instruction<br>" +
        "</pre><br><br><br><br>" +
        "Examples:" +
        "<pre>" +
        "<code><instruction2_blue>int</instruction2_blue> anIntVar = <value_orange>15</value_orange>;</code> <br>" +
        "<code><instruction2_blue>double</instruction2_blue> aDoubleVar = <value_orange>2.5</value_orange>;</code> <br>" +
        "<code><instruction2_blue>string</instruction2_blue> aStringVar = <value_orange>\"Hello I am a message saved in a string\"</value_orange>;</code> <br>" +
        "<code><instruction2_blue>boolean</instruction2_blue> aBoolOrBooleanVar = <value_orange>true</value_orange>;</code> <br>" +
        "<code><instruction2_blue>boolean</instruction2_blue> anotherBoolOrBooleanVar = <value_orange>false</value_orange>;</code><br>" +
        "</pre><br><br>" +
        "By the way you can change the value of your variable like this:" +
        "<pre>" +
        "<code>anIntVar = <value_orange>0</value_orange></code>" +
        "</pre><br>" +
        "To check the value of your variable, you can use print instructions:" +
        "<pre>" +
        "<code>print(aDoubleVar);</code>" +
        "</pre>" +
        "<pre>" +
        "<code>println(<value_orange>\"The value of the variable is \" </value_orange>aBoolOrBooleanVar); </code>" +
        "</pre><br>" +
        "Let's speak about const variables. In this case, you can not change the value of your variable. To declare a variable like this, it's like before, but you have to specify as first argument <code>final</code>:" +
        "<pre>" +
        "<code><instruction_purple>final </instruction_purple><instruction2_blue>int</instruction2_blue> anSecondIntVar = <value_orange>5</value_orange>;</code>" +
        "</pre><br><br><br>" +
        "</p>",
};

startButton.addEventListener('click', function() {
    divGauche.style.display = 'block';
    divDroite.innerHTML = contentRight.start;
    divDroite.style.display = 'block';
});

printButton.addEventListener('click', function() {
    divGauche.style.display = 'block';
    divDroite.innerHTML = contentRight.print;
    divDroite.style.display = 'block';
});

typesButton.addEventListener('click', function() {
    divGauche.style.display = 'block';
    divDroite.innerHTML = contentRight.types;
    divDroite.style.display = 'block';
});

varsButton.addEventListener('click', function() {
    divGauche.style.display = 'block';
    divDroite.innerHTML = contentRight.vars;
    divDroite.style.display = 'block';
});