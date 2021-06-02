def stdDev(arr)
    length = arr.length
    mean = (arr.sum) / length
    
    variance_sum = 0
    arr.each do |int|
        variance = int - mean
        # we raise the variance by two to eliminate negative numbers
        variance = variance**2
        variance_sum += variance
    end
     
    mean_variance = variance_sum / length
    
    mean_variance**(0.5)
end