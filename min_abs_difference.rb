# Given an array of distinct integers arr,
# find all pairs of elements with
# the minimum absolute difference of any two elements.
# Return a list of pairs in ascending order(with respect to pairs),
# each pair [a, b] follows:
# a, b are from arr
# a < b
# b - a equals to the minimum absolute difference of any two elements in arr
#
# Example 1:
# Input: arr = [4,2,1,3]
# Output: [[1,2],[2,3],[3,4]]
# Explanation: The minimum absolute difference is 1.
# List all pairs with difference equal to 1 in ascending order.
#
# Example 2:
# Input: arr = [1,3,6,10,15]
# Output: [[1,3]]
#
# Example 3:
# Input: arr = [3,8,-10,23,19,-4,-14,27]
# Output: [[-14,-10],[19,23],[23,27]]

def minimum_abs_difference(arr)
  arr.sort!
  pairs = []
  min_diff = (arr[0] - arr[arr.length-1]).abs

  i = 0
  while i < arr.length && arr[i+1]
    int1 = arr[i]
    int2 = arr[i + 1]
    pair = [int1, int2]

    abs_diff = (int1 - int2).abs
    if abs_diff < min_diff
      pairs = []
      min_diff = abs_diff
    end
    pairs.push(pair) if abs_diff <= min_diff

    i += 1
  end

  pairs
end
