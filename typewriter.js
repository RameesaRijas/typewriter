const sentence = "hello there from lighthouse labs";
let counter = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      console.log("\n")
    }
  }, counter * 50)
  counter ++;
}
