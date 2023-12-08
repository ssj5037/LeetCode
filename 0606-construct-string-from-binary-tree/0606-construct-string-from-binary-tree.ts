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

function tree2str(root: TreeNode | null): string {
    let result: string = '';
    let left: string = '';
    let right: string = '';
    if (root.left) {
        left = tree2str(root.left);
    }
    if (root.right) {
        right = tree2str(root.right);
    }

    result = root.val.toString();
    if (right.length > 0) {
        result += `(${left})(${right})`;
    } else {
        if (left.length > 0) {
            result += `(${left})`;
        }
    }
    return result;
}