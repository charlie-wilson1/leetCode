class Tracker {
    constructor(){
        this.strings = {};
    }
    
    allocate(string) {
        if (this.strings[string] === undefined) {
            this.strings[string] = 1;
            return string + 1;
        } else {
            this.strings[string] += 1;
            return string + this.strings[string];
        }
    }
    
    deallocate(string) {
        console.log(this.strings)
        let parse = string.split('')
        parse.pop()
        let str = parse.join('')
        str
        this.strings[str]--;
        
    }
}

function hostAllocation(queries) {
  var tracker = new Tracker();
  var results = [];
  queries.forEach(function (query) {
    var [action, name] = query.split(' ');
    if (action === 'A') {
      results.push(tracker.allocate(name));
    } else if (action === 'D') {
      tracker.deallocate(name);
    }
  });
  return results;
}

console.log(hostAllocation([
"A apibox", 
"A apibox", 
"D apibox1", 
"A apibox", 
"A sitebox"]))