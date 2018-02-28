const { Readable } = require('stream');



const inoutStream = new Readable({
    write(chunk,encoding,cb){
        console.log(chunk.toString());
        cb()
    },
  read(size) {
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentCharCode++));
  }
});

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);
