var $ = function(id) { return document.getElementById(id); };

function range(fromInclusive, toExclusive) {
    const rangeLength = toExclusive - fromInclusive;
    return Array.from(new Array(rangeLength).keys())
        .map(n => n + fromInclusive);
}