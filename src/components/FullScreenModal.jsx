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
		<div className={`${styles.FullScreenModal}`}>

			{/* OPEN BUTTON WRAP */}
			<div className={`${styles.openBtnWrap}`}>

				{/* Hidden Checkbox */}
				<input id="MODAL_TRIGGER" type="checkbox" />

				{/* OPEN BUTTON */}
				<label
					style={{ backgroundColor: `${btnColor}`, color: `${btnTextColor}` }} htmlFor="MODAL_TRIGGER"
				>
					{btnText}
				</label>

				{/*  MODAL BACKGROUND */}
				<div className={`${styles.FullScreenModal__overlay}`} role="dialog">

					{/* MODAL BOX */}
					<div className={`${styles.FullScreenModal__modalBox}`}>
						<label htmlFor="MODAL_TRIGGER">×</label>
						<h2>{modalTitle}</h2>
						<hr className={`${styles.hr}`} />
						<p >
							{modalText}
						</p>

						{/* CLOSE BUTTON */}
						<label htmlFor="MODAL_TRIGGER" className={`${styles.closeBtn}`}>CLOSE</label>
						
					</div>

				</div>
			</div>
		</div>
	);
};

export default FullScreenModal;
