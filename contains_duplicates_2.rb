# Given an array of integers and an integer k, 
# find out whether there are two distinct indices i and j in the array 
# such that nums[i] = nums[j] 
# and the absolute difference between i and j is at most k.

# Example 1:

# Input: nums = [1,2,3,1], k = 3
# Output: true
# Example 2:

# Input: nums = [1,0,1,1], k = 1
# Output: true
# Example 3:

# Input: nums = [1,2,3,1,2,3], k = 2
# Output: false

def contains_nearby_duplicate(nums, k)
    counter = {}
    
    nums.each_with_index do |num, i|
        return true if i - counter[num] <= k if counter[num]
        
        counter[num] = i        
    end
    
    false
end