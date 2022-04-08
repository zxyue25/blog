function log (target, name, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        console.log(`Calling "${name}" with`, arguments);
        return originalMethod.apply(null, arguments);
    };
    return descriptor;
}

class Math {
    @log
    add (a, b) {
        return a + b;
    }
}


const math = new Math();