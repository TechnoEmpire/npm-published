// We can't delete this for bundling purpose
import React from 'react';

import styles from "./FullScreenModal.module.scss";




const FullScreenModal = ({
  btnText = "OPEN MODAL",
	btnColor = "#373737",
	btnTextColor = "#fff",
	modalTitle = "Modal Title",
	modalText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi doloremque nostrum provident consequuntur tenetur modi mollitia dolor inventore corrupti amet fuga fugit, cupiditate sapiente quo? Sint eveniet saepe ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi doloremque nostrum provident consequuntur tenetur modi mollitia dolor inventore corrupti amet fuga fugit, cupiditate sapiente quo? Sint eveniet saepe ratione.",
}
) => {

	

	return (
		<div
			className={`${styles.cp_modal04}`}
			// className={`${styles.modalContent} ${styles[positionType]} ${className}`}
		>
			<div className={`${styles.cp_modal}`}>
				<input id="cp_trigger" type="checkbox" />
				<label style={{ backgroundColor: `${btnColor}`, color: `${btnTextColor}` }} htmlFor="cp_trigger">{btnText}</label>
				<div className={`${styles.cp_overlay}`} role="dialog">
					<div className={`${styles.cp_wrap}`}>
						<label htmlFor="cp_trigger">×</label>
						<h2>{modalTitle}</h2>
						<hr className={`${styles.hr}`}/>
						<p className={`${styles.citation}`}>
							{modalText}
						</p>
						<label htmlFor="cp_trigger" className={`${styles.cp_btn}`}>CLOSE</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullScreenModal;
