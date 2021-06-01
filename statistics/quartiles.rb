require_relative 'median'

# Given an array of integers, calculate the respective first quartile, second quartile, and third quartile. It is guaranteed that elements are integers.

def quartiles(arr)
    sorted = arr.sort
    length = sorted.length
    mid = length/2

    # As there are an odd number of data points, we do not include the median (the central value in the ordered list) in either half:
    if length % 2 != 0
        lower = sorted[0...mid]
        upper = sorted[mid+1...length]
    else
        lower = sorted[0..mid]
        upper = sorted[mid...length]
    end

    q1 = median(lower)
    q2 = median(sorted)
    q3 = median(upper)
    
    [q1, q2, q3]
end