function my() {
    names = ['John','Kakarotto','Izuku','David','Toshinari','Jenny','James','Luffy'];
    for(var name in names) {
    var firstLetter = names[name].charAt(0);
    if (firstLetter === 'J' || firstLetter === 'j') {
        speakGoodbye(names[name]);  
    }
    else {
        speakHello(names[name]);
    }
    }
}
my();