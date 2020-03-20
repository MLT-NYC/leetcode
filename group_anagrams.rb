# Given an array of strings, group anagrams together.

# Example:

# Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
# Output:
# [
#   ["ate","eat","tea"],
#   ["nat","tan"],
#   ["bat"]
# ]

def group_anagrams(strs, count = {})
    strs.each do |str|
        str_sym = str.split('').sort.join('').to_sym
        
        if count[str_sym]
            count[str_sym] << str
        else
            count[str_sym] = [str]
        end
    end
    
    count.values
end