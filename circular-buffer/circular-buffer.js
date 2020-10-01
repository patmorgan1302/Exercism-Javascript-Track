export const BufferFullError = new Error('Buffer is full');
export const BufferEmptyError = new Error('Buffer is empty'); 
export default class CircularBuffer {
  constructor(size) {
    // track the buffers size
    this.size = size;
    this.buffer = [];
  };

  write(input) {
    // if written input is null or undefined, return false.
    if (input === null || input === undefined) 
      return false;
    // if length of buffer greater than or equal to size, throw BufferFullError.
    if (this.buffer.length >= this.size) 
      throw BufferFullError;
      
    this.buffer.push(input);
  };

  read() {
    if (this.buffer.length === 0) 
      throw BufferEmptyError;
    // else return first element from this.buffer
    return this.buffer.shift();
  };

  forceWrite(input) {
    if (this.buffer.length >= this.size){
    this.read();
    this.write(input);
    }
  };
  
  clear() {
    this.buffer = [];
  }
};


