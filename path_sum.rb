# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @param {Integer} sum
# @return {Boolean}

# Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

# Note: A leaf is a node with no children.

# Example:

# Given the below binary tree and sum = 22,

#       5
#      / \
#     4   8
#    /   / \
#   11  13  4
#  /  \      \
# 7    2      1

# return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

def has_path_sum(root, sum, total = 0)
  return false unless root
  curr_total = root.val + total
  return true if !root.left && !root.right && curr_total == sum || has_path_sum(root.left, sum, curr_total) || has_path_sum(root.right, sum, curr_total)

  false
end
