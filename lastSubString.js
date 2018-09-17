// 返回一个string的所有substring按字典顺序排序后的最后一个substring. 例子："acb"的substring排序{"a", "ac", "acb", "b", "c", "cb"}， 返回"cb" 。

function lastSubString(str){
	if(str.length === 0) return '';
	let code = -Infinity;
	let idx = -1;
	for(let i = 0; i < str.length; i++){
		if(code < str[i].charCodeAt()){
				str[i].charCodeAt()
				idx = i;
		}
	}

	return str.slice(idx);

}



// import java.util.*;
// public class LastSubstring {
//     public String laststring(String s){
//         char c = 'a';
//         for(int i=0;i<s.length();i++){
//             char crt = s.charAt(i);
//             if(crt>c) c = crt;
//         }
//         String max = "";
//         for(int i=0;i<s.length();i++){
//             char crt = s.charAt(i);
//             if(crt==c&&max.compareTo(s.substring(i))<0){
//                 max = s.substring(i);
//             }
//         }
//         return max;
//     }
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         String ipt = sc.next();
//         LastSubstring test = new LastSubstring();
//         System.out.println(test.laststring(ipt));
//     }
// }
