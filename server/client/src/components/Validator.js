
function escapeHtml(str) {
    return str
        .replace(/&/g, "")
        .replace(/</g, "")
        .replace(/>/g, "")
        .replace(/"/g, "")
        .replace(/'/g, "")
        .replace(/\/+$/, '');
  };

export default escapeHtml;

// function removeTrailingSlash(str) {
//     return str.replace(/\/+$/, '');
//   };