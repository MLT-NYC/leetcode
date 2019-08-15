# Given an array of integers, find if the array contains any duplicates.

# Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

# Example 1:

# Input: [1,2,3,1]
# Output: true

def contains_duplicate(nums)
    counter = {}
    
    nums.each_with_index do |num, i|
        return true if counter[num]
        counter[num] = i
    end
    
    false
end