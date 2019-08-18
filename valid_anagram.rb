# Given two strings s and t , 
# write a function to determine 
# if t is an anagram of s.

# Example 1:

# Input: s = "anagram", t = "nagaram"
# Output: true
# Example 2:

# Input: s = "rat", t = "car"
# Output: false

def is_anagram(s, t)
    s_char_counter = {}
    s.each_char do |s_char|
        s_char_counter[s_char] = 1 if !s_char_counter[s_char]
        
        s_char_counter[s_char] += 1
    end
    
    t_char_counter = {}
    t.each_char do |t_char|
        return false if !s_char_counter[t_char]
        
        t_char_counter[t_char] = 1 if !t_char_counter[t_char]
        
        t_char_counter[t_char] += 1
    end
    
    s_char_counter == t_char_counter
end