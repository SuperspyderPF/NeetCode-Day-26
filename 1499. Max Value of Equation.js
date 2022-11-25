var findMaxValueOfEquation = function(points, k) {
    let sol = -Infinity;
    let queue = [];
    for(let c of points) {
        while(queue.length && c[0] - queue[0][1] > k) {
            queue.shift();
        }
        if(queue.length) {
            sol = Math.max(sol, queue[0][0] + c[1] + c[0]);
        }
        while(queue.length && c[1] - c[0] > queue[queue.length - 1][0]) {
            queue.pop();
        }
        queue.push([c[1] - c[0], c[0]]);
    }
    return sol;
};