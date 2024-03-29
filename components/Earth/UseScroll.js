import { useState, useEffect } from 'react';

export const useScroll = () => {
	const [scroll, updateScroll] = useState(0);
	var scrollPostion;
	const scrollAnim = () => {
		const getDocHeight = () => {
			return Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.offsetHeight,
				document.body.clientHeight,
				document.documentElement.clientHeight
			);
		};
		const scrollTop = window.pageYOffset;
		const winHeight = window.innerHeight;
		const docHeight = getDocHeight();
		const totalDocScrollLength = docHeight - winHeight;
		scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);
		updateScroll(scrollPostion);
	};
	useEffect(() => {
		function watchScroll() {
			window.addEventListener('scroll', scrollAnim);
		}
		watchScroll();
		return () => {
			window.removeEventListener('click', scrollAnim);
		};
	});
	return [scroll, scrollPostion];
};
