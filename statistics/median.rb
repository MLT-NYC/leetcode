def median(nums)
    median = 1/0.0
    length = nums.length
    mid = length/2
    
    if length % 2 == 0
        median1 = nums[mid - 1]
        median2 = nums[mid]
        medium_sum = median1 + median2
        median =  medium_sum / 2
    else
        median = nums[mid]
    end

    median
end