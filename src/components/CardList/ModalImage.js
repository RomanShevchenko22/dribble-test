import React from 'react';
import { Button, Modal } from 'antd';

export default function ModalImage(props) {
	const {title, src, alt, keyModal, visible, setVisible} = props;
	return (
		<Modal
			title={title}
			visible={visible}
			footer={[            
				<Button key="back" onClick={() => {
					setVisible(!visible);
					// console.log(visibleOffHandler);
					console.log('visible', visible);
				}}>
				  Return
				</Button>
			]}
		>
			<img style={{width: "100px"}}
				src={src}
				alt={alt}
				key={keyModal}
			/>
		</Modal>
	);
};