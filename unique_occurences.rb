# Given an array of integers arr, 
# write a function that 
# returns true if and only if the number of occurrences of each value in the array is unique.

# Example 1:
# Input: arr = [1,2,2,1,1,3]
# Output: true
# Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
# No two values have the same number of occurrences.

# Example 2:
# Input: arr = [1,2]
# Output: false

# Example 3:
# Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
# Output: true


def unique_occurrences(arr, num_count = {}, occ_count = {})
    arr.each do |num|
        num_sym = num.to_s.to_sym
        
        if num_count[num_sym]
            num_count[num_sym] += 1
        else 
            num_count[num_sym] = 1
        end
    end
    
    num_count.values.each do |occurence|
        occ_sym = occurence.to_s.to_sym
        
        if occ_count[occ_sym]
            return false
        else 
            occ_count[occ_sym] = true
        end
    end
    
    true
end