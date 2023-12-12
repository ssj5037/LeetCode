/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length < 1) return null;
    
    const centerIndex: number = Math.floor(nums.length / 2);
    
    const val: number = nums[centerIndex];
    let left: TreeNode | null = sortedArrayToBST(nums.slice(0, centerIndex));
    let right: TreeNode | null = sortedArrayToBST(nums.slice(centerIndex + 1));
    
    return new TreeNode(val, left, right);
};