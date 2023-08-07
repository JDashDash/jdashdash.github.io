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
        "The interpreter is the tool that will check your code and do actions, it depends on what you are asking in it.<br><br>" +
        "Once you downloaded it, you can now code in J-- ! To interprete your code, you have to open a terminal, call the interpreter with the path to the file with the extension <code>.jdd</code>" +
        "</p>",
    print: "<p>In J-- there is two style of print : <instruction2_blue>print</instruction2_blue> and <instruction2_blue>println</instruction2_blue>. We will start with print:" +
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
        "If you do not know why there is '\\n' in the instruction, it to go to the next line, it's a jump in strings. We will speak about it later." +
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