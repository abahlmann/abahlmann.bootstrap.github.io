class Blog {
constructor(title, paragraph, example) {
//paragraphs
for (let i = 0; i < paragraph.length; i++){
this.paragraph[i]=paragraph[i];
}//close paragraph for-loop

//blog posts
for (let i = 0; i < example.length; i++){
this.example[i]=example[i]
}

this.title=title;
}//close constructor
}//close Blog