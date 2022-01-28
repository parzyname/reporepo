const Person = function(first,last){
    this.first = first;
    this.last = last;
    this.full = function(){
        console.log(`${this.first} ${this.last}`)
    }
}

