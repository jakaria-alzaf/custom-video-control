import React, { useEffect, useState } from "react";
import { useRef } from "react";


const VideoPlayer = () => {

	const mainMenus = [
		{
			id: 'main1',
			icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M13.84 4.9C13.6367 4.76234 13.4026 4.67694 13.1584 4.65136C12.9142 4.62578 12.6674 4.6608 12.44 4.75333L11.1667 5.26V5C11.1667 4.60218 11.0086 4.22064 10.7273 3.93934C10.446 3.65804 10.0645 3.5 9.66667 3.5H3C2.60218 3.5 2.22064 3.65804 1.93934 3.93934C1.65804 4.22064 1.5 4.60218 1.5 5V11C1.5 11.3978 1.65804 11.7794 1.93934 12.0607C2.22064 12.342 2.60218 12.5 3 12.5H9.66667C10.0645 12.5 10.446 12.342 10.7273 12.0607C11.0086 11.7794 11.1667 11.3978 11.1667 11V10.74L12.44 11.2467C12.6181 11.3179 12.8082 11.3541 13 11.3533C13.2987 11.3525 13.5907 11.2645 13.84 11.1C14.0446 10.9626 14.2124 10.7771 14.3286 10.5597C14.4449 10.3424 14.506 10.0998 14.5067 9.85333V6.14667C14.506 5.90019 14.4449 5.65764 14.3286 5.44029C14.2124 5.22293 14.0446 5.03742 13.84 4.9ZM10.1667 11C10.1649 11.1321 10.1117 11.2582 10.0183 11.3516C9.92491 11.445 9.79874 11.4983 9.66667 11.5H3C2.86793 11.4983 2.74175 11.445 2.64836 11.3516C2.55496 11.2582 2.50173 11.1321 2.5 11V5C2.50173 4.86793 2.55496 4.74175 2.64836 4.64836C2.74175 4.55496 2.86793 4.50173 3 4.5H9.66667C9.79874 4.50173 9.92491 4.55496 10.0183 4.64836C10.1117 4.74175 10.1649 4.86793 10.1667 5V11ZM13.5 9.85333C13.4992 9.93292 13.4795 10.0112 13.4424 10.0816C13.4053 10.152 13.352 10.2126 13.2868 10.2582C13.2215 10.3039 13.1464 10.3333 13.0675 10.344C12.9887 10.3548 12.9084 10.3465 12.8333 10.32L11.1867 9.65333V6.32L12.8333 5.65333C12.9084 5.6268 12.9887 5.61856 13.0675 5.62931C13.1464 5.64005 13.2215 5.66947 13.2868 5.71511C13.352 5.76076 13.4053 5.82131 13.4424 5.89173C13.4795 5.96215 13.4992 6.04041 13.5 6.12V9.85333Z" fill="white" />
				<path d="M4.33464 6.16797H3.66797C3.53536 6.16797 3.40818 6.11529 3.31442 6.02152C3.22065 5.92775 3.16797 5.80058 3.16797 5.66797C3.16797 5.53536 3.22065 5.40818 3.31442 5.31442C3.40818 5.22065 3.53536 5.16797 3.66797 5.16797H4.33464C4.46724 5.16797 4.59442 5.22065 4.68819 5.31442C4.78196 5.40818 4.83464 5.53536 4.83464 5.66797C4.83464 5.80058 4.78196 5.92775 4.68819 6.02152C4.59442 6.11529 4.46724 6.16797 4.33464 6.16797Z" fill="white" />
			</svg>,
			name: 'Video Quality',
			value: 'quality'
		},
		{
			id: 'main2',
			icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M7.00002 13.6299C5.84248 13.502 4.78424 13.0449 3.92097 12.3543M8.33371 1.7032C11.3337 2.03501 13.6665 4.57805 13.6665 7.66653C13.6665 10.755 11.3337 13.2981 8.33371 13.6299M2.97824 11.4114C2.28803 10.5485 1.83117 9.49069 1.7032 8.33371M1.70312 7.00002C1.83099 5.84278 2.2879 4.78478 2.97824 3.92163M3.92163 2.97824C4.78477 2.2879 5.84278 1.83099 7.00002 1.70312M5.66653 9.66653L9.66653 7.66653L5.66653 5.66653V9.66653Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
			</svg>,
			name: 'Playback Speed',
			value: 'speed'
		},
		{
			id: 'main3',
			icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M7.99804 10.9648C7.55073 10.9648 7.17578 11.3398 7.17578 11.7871C7.17578 12.2344 7.55073 12.6094 7.99804 12.6094C8.42891 12.6094 8.8203 12.2344 8.80057 11.8068C8.8203 11.3365 8.44864 10.9648 7.99804 10.9648Z" fill="white" />
				<path d="M15.6107 13.8799C16.127 12.9885 16.1303 11.9262 15.6172 11.0381L10.4666 2.11824C9.95679 1.22033 9.03585 0.6875 8.00309 0.6875C6.97033 0.6875 6.0494 1.22361 5.53959 2.11495L0.382367 11.0447C-0.130724 11.9426 -0.127435 13.0116 0.392235 13.9029C0.905326 14.7844 1.82297 15.3139 2.84915 15.3139H13.1373C14.1668 15.3139 15.091 14.7778 15.6107 13.8799ZM14.4924 13.2352C14.2062 13.7286 13.6997 14.0213 13.134 14.0213H2.84586C2.28673 14.0213 1.7835 13.7352 1.50393 13.2517C1.22107 12.7616 1.21779 12.1761 1.50064 11.6828L6.65787 2.75631C6.93744 2.26624 7.43737 1.97681 8.00309 1.97681C8.56552 1.97681 9.06874 2.26953 9.34831 2.7596L14.5022 11.6861C14.7785 12.1663 14.7752 12.7451 14.4924 13.2352Z" fill="white" />
				<path d="M7.79494 5.19509C7.40355 5.30692 7.16016 5.66213 7.16016 6.093C7.17989 6.35283 7.19634 6.61596 7.21607 6.87579C7.27198 7.8658 7.3279 8.83606 7.38381 9.82607C7.40355 10.1616 7.66338 10.4049 7.99886 10.4049C8.33435 10.4049 8.59747 10.1451 8.61391 9.80633C8.61391 9.60241 8.61391 9.41494 8.63365 9.20773C8.66983 8.57294 8.7093 7.93815 8.74548 7.30337C8.76521 6.89224 8.80139 6.48111 8.82113 6.06998C8.82113 5.92197 8.80139 5.79041 8.74548 5.65884C8.57774 5.29047 8.18634 5.103 7.79494 5.19509Z" fill="white" />

				<clipPath id="clip0_1207_11683">
					<rect width="16" height="16" fill="white" />
				</clipPath>

			</svg>,
			name: 'Report',
			value: 'report'
		},
		{
			id: 'main4',
			icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">

				<path d="M8.00004 0C3.58868 0 0 3.58891 0 8.00026C0.000371307 12.4112 3.5892 15.9998 8.00004 15.9998C12.4112 15.9998 16.0001 12.4112 16.0001 8.00019C16 3.58891 12.4112 0 8.00004 0ZM8.00004 1.11392C9.63535 1.11392 11.139 1.68729 12.3215 2.64311L2.64319 12.3213C1.68752 11.1389 1.11407 9.63535 1.11392 8.00019C1.11392 4.20312 4.20305 1.11392 8.00004 1.11392ZM8.00004 14.8859C6.2387 14.8859 4.62998 14.2208 3.4109 13.1291L13.1291 3.41083C14.221 4.6299 14.8861 6.23878 14.8861 8.00026C14.8861 11.797 11.797 14.8859 8.00004 14.8859Z" fill="white" />

				<clipPath id="clip0_1207_11691">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</svg>,
			name: 'Block'
		},
	]
	const reportOptions = [
		{
			id: 'report1',
			name: 'Hate Speech'
		},
		{
			id: 'report2',
			name: 'Violence or Self-Harm'
		},
		{
			id: 'report3',
			name: 'Harassment or Bullying'
		},
		{
			id: 'report4',
			name: 'Nudity or Sexual Content'
		},
		{
			id: 'report5',
			name: 'Nudity or Sexual Content'
		},
		{
			id: 'report6',
			name: 'Fake News or Misinformation'
		},
		{
			id: 'report7',
			name: 'Intellectual Property Violation'
		},
		{
			id: 'report8',
			name: 'Spam or Scams'
		},
		{
			id: 'report9',
			name: 'Suicide or Self-Harm Concern'
		},
	]

	const videoRef = useRef(null);
	const [progress, setProgress] = useState(0);
	const [isPlaying, setPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const [isMuted, setIsMuted] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [optionOpen, setOptionOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('')
	const [selectedOptionsOpen, setSelectedOptionOpen] = useState(false)
	const [selectedReport, setSelectedReport] = useState('')
	const progressRef = useRef(null)
	const [isDragging, setIsDragging] = useState(false);
	const soundParentRef = useRef(null)
	const soundChildRef = useRef(null)
	const [isSoundDragging, setIsSoundDragging] = useState(false);
	const menuRef = useRef(null)


	const handlePlay = () => {
		setPlaying(true);
	};

	const handlePause = () => {
		setPlaying(false);
	};

	const togglePlayPause = () => {
		const video = videoRef.current;

		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}

		setPlaying(!video.paused);
	};

	// Progress
	const handleProgress = () => {
		const video = videoRef.current;
		const percent = (video.currentTime / video.duration) * 100;
		setProgress(percent);
	};

	const handleProgressTimeOnclick = (e) => {
		const progressDiv = progressRef.current;
		const video = videoRef.current;

		const percent = (e.nativeEvent.offsetX / progressDiv.offsetWidth) * 100;


		const currentTime = (percent / 100) * video.duration;
		video.currentTime = currentTime;
		setIsDragging(false)
	};

	const handleMouseDown = () => {
		setIsDragging(true);
	};

	const handleMouseMove = (e) => {
		if (isDragging) {
			const progressDiv = progressRef.current;
			const video = videoRef.current;
			const percent = (e.nativeEvent.offsetX / progressDiv.offsetWidth) * 100;
			const currentTime = (percent / 100) * video.duration;
			video.currentTime = currentTime;
		}
	};

	const handleMouseUp = () => {
		setIsSoundDragging(false);
	};

	// Sound
	const handleSoundMouseDown = () => {
		setIsSoundDragging(true);
	};

	const handleSoundMouseMove = (e) => {
		if (isSoundDragging) {
			const divA = soundParentRef.current;
			const divB = soundChildRef.current;

			const { left: divALeft, width: divAWidth } = divA.getBoundingClientRect();
			const { left: divBLeft } = divB.getBoundingClientRect();

			const offsetX = e.clientX - divBLeft;

			// Calculate the percentage based on the offset within div B relative to div A
			let newDragPercentage = offsetX / divAWidth;

			// Ensure the percentage stays within bounds (0 to 1)
			newDragPercentage = Math.max(0, Math.min(1, newDragPercentage));
			setVolume(newDragPercentage);
			let mute = false;
			if (newDragPercentage < 0.05) {
				mute = true
			}
			const volumeInfo = {
				isMuted: mute,
				userVolume: newDragPercentage
			}
			localStorage.setItem('userSetting', JSON.stringify(volumeInfo))

			setIsSoundDragging(newDragPercentage);
		}
	};

	const handleSoundMouseUp = () => {
		setIsSoundDragging(false);
	};

	const handleSoundMouseClick = (e) => {
		const divA = soundParentRef.current;
		const divB = soundChildRef.current;

		const { left: divALeft, width: divAWidth } = divA.getBoundingClientRect();
		const { left: divBLeft, width: divBWidth } = divB.getBoundingClientRect();

		const offsetX = e.clientX - divBLeft;

		let newDragPercentage = offsetX / divAWidth;

		newDragPercentage = Math.max(0, Math.min(1, newDragPercentage));

		setVolume(newDragPercentage);

		let mute = false;
		if (newDragPercentage <= 0.05) {
			mute = true
		}
		localStorage.setItem('userSetting', JSON.stringify({ muted: mute, userVolume: newDragPercentage }));
		videoRef.current.volume = newDragPercentage
		setIsSoundDragging(false)

	};

	const toggleMute = () => {
		setIsMuted((prevMuted) => !prevMuted);

		const userSettingString = localStorage.getItem('userSetting');
		const userSetting = JSON?.parse(userSettingString);

		if (userSetting) {
			if (userSetting.muted && userSetting?.userVolume < 0.05) {
				const volumeInfo = { ...userSetting, muted: !isMuted, userVolume: 0.05 }
				localStorage.setItem('userSetting', JSON.stringify(volumeInfo));
			} else {
				const volumeInfo = { ...userSetting, muted: !isMuted }
				localStorage.setItem('userSetting', JSON.stringify(volumeInfo));
			}
		}

		else {
			localStorage.setItem('userSetting', JSON.stringify({ muted: !isMuted, userVolume: volume }));
		}
	};


	const handleFormatTime = (timeInSeconds) => {
		const hours = Math.floor(timeInSeconds / 3600);
		const minutes = Math.floor((timeInSeconds % 3600) / 60);
		const seconds = Math.floor(timeInSeconds % 60);

		const formattedHours = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : '';
		const formattedMinutes = `${minutes.toString().padStart(2, '0')}:`;
		const formattedSeconds = seconds.toString().padStart(2, '0');

		return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
	};

	const handleFullScreen = () => {
		const videoElement = videoRef.current;

		if (document.fullscreenElement) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		} else {
			if (videoElement.requestFullscreen) {
				videoElement.requestFullscreen();
			}
		}
	};

	const handleSelectedOption = (value) => {
		setSelectedOption(value)
		setOptionOpen(prev => !prev)
		setSelectedOptionOpen(true)
	}

	const handleTogglePictureInPicture = async () => {
		if (document.pictureInPictureElement) {
			await document.exitPictureInPicture();
		} else {
			try {
				await videoRef.current.requestPictureInPicture();
			} catch (error) {
				console.error('Error entering Picture-in-Picture mode:', error);
			}
		}
	};

	const handleRewind = () => {
		const video = videoRef.current;
		video.currentTime -= 5;
	};

	const handleFastForward = () => {
		const video = videoRef.current;
		video.currentTime += 5;
	};

	useEffect(() => {
		const video = videoRef.current;
		video.volume = volume;
		const handleVolumeUp = () => {
			let newVolume = volume + 0.05
			const updatedValue = parseFloat(newVolume)?.toFixed(2)
			setVolume(updatedValue)
			const volumeInfo = {
				muted: false,
				userVolume: updatedValue
			}
			localStorage.setItem('userSetting', JSON.stringify(volumeInfo))

			video.volume += 0.05
		}

		const handleVolumeDown = () => {
			let newVolume = volume - 0.05
			const updatedValue = parseFloat(newVolume)?.toFixed(2)
			let muted = false;
			if (volume <= 0.05) {
				muted = true
			}
			setVolume(updatedValue);
			const volumeInfo = {
				muted: muted,
				userVolume: updatedValue
			}
			localStorage.setItem('userSetting', JSON.stringify(volumeInfo))
			video.volume -= 0.05


		}


		const handleKeyDown = (event) => {
			const { keyCode } = event;


			switch (keyCode) {
				case 32:
				case 75:
					togglePlayPause()
					break;
				case 37:
					handleRewind();
					break;
				case 39:
					handleFastForward();
					break;
				case 70:
					handleFullScreen();
					break;
				case 73:
					handleTogglePictureInPicture();
					break;
				case 38:
					if (volume <= 0.95) {
						handleVolumeUp()
					}
					break;
				case 40:
					if (volume >= 0.05) {
						handleVolumeDown()
					}

					break;
				case 77:
					toggleMute();
					break;
				default:
					break;
			}
		};

		// Get userdata from Localstorage and set to state 
		const userSettingString = localStorage.getItem('userSetting');
		const userSetting = JSON?.parse(userSettingString);
		if (userSetting) {
			const userVolume = parseFloat(userSetting?.userVolume).toFixed(2);

			if (userSetting.muted) {
				setIsMuted(true)
				setVolume(0)
			} else {
				setVolume(Number(userVolume))
			}
		}



		const handleTimeUpdate = () => {
			setCurrentTime(video.currentTime);
		};

		const handleDurationChange = () => {
			setDuration(video.duration);
		};
		const handleVideoEnd = () => {
			setPlaying(false)
			video.currentTime = 0;
			setCurrentTime(0);
		};


		const handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setOptionOpen(false)
				setSelectedOptionOpen(false)
			}
		}

		document.addEventListener("mousedown", handler)
		document.addEventListener('keydown', handleKeyDown);
		video.addEventListener('timeupdate', handleTimeUpdate);
		video.addEventListener('durationchange', handleDurationChange);
		video.addEventListener('ended', handleVideoEnd);

		return () => {
			document.removeEventListener("mousedown", handler)
			document.removeEventListener('keydown', handleKeyDown);
			video.removeEventListener('timeupdate', handleTimeUpdate);
			video.removeEventListener('durationchange', handleDurationChange);
			video.removeEventListener('ended', handleVideoEnd);

		};


	}, [isMuted, volume]);


	return (

		<div className=" my-12 video-player max-w-[675px] max-h-[438px] h-full w-full relative group border-[0.5px] rounded-sm " >
			{/* Video Player */}
			<video onPlay={handlePlay} onPause={handlePause} muted={isMuted} onTimeUpdate={handleProgress} className="w-[675px] hover:cursor-pointer" ref={videoRef} src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4"></video>

			<div className={`video-controls-container control-background py-1 z-40  w-full absolute bottom-0 px-2.5  ${!isPlaying ? '' : 'opacity-0 group-hover:opacity-100  transition-all duration-150 ease-in delay-200 '}`}>
				<div
					ref={progressRef}
					className="bg-transparent py-[2px]"
					style={{ cursor: 'pointer' }}
					onClick={handleProgressTimeOnclick}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseUp}
					onMouseMove={handleMouseMove}
				>
					<div className="bg-white rounded-full" >
						<div className=" border-[2px] border-[#F97316] my-2 rounded-full " style={{ width: `${progress}%` }}>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between">
					<div className="left-options flex items-center gap-1">
						<div className="flex items-center gap-2.5">
							<div className="player-controls">
								<button className="play-button mt-1" onClick={togglePlayPause}>{isPlaying ?
									(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M6.33333 3.0026C6.33333 2.08213 5.58714 1.33594 4.66667 1.33594C3.74619 1.33594 3 2.08213 3 3.0026V13.0026C3 13.9231 3.74619 14.6693 4.66667 14.6693C5.58714 14.6693 6.33333 13.9231 6.33333 13.0026V3.0026Z" fill="white" />
										<path d="M12.9974 3.0026C12.9974 2.08213 12.2512 1.33594 11.3307 1.33594C10.4103 1.33594 9.66406 2.08213 9.66406 3.0026V13.0026C9.66406 13.9231 10.4103 14.6693 11.3307 14.6693C12.2512 14.6693 12.9974 13.9231 12.9974 13.0026V3.0026Z" fill="white" />
									</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">

										<path d="M3.40299 0.352788C1.96049 -0.474645 0.791016 0.203198 0.791016 1.86558V14.1332C0.791016 15.7973 1.96049 16.4743 3.40299 15.6476L14.1255 9.4983C15.5685 8.67057 15.5685 7.32953 14.1255 6.502L3.40299 0.352788Z" fill="white" />
										<clipPath id="clip0_1205_11647">
											<rect width="16" height="16" fill="white" />
										</clipPath>
									</svg>)
								}</button>
							</div>
							{/* Volume control */}
							<div className="volume-controls flex items-center gap-2.5 group">
								<span>

									{
										volume <= 0 || isMuted ? <svg onClick={toggleMute} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
											<path d="M9.29813 0.58414C9.11253 0.495606 8.89387 0.519073 8.73387 0.64814L3.5456 4.79854H1.06667C0.478933 4.79854 0 5.27747 0 5.86521V10.1319C0 10.7207 0.478933 11.1985 1.06667 11.1985H3.5456L8.7328 15.3489C8.82987 15.4257 8.94827 15.4652 9.06667 15.4652C9.1456 15.4652 9.22453 15.4471 9.29813 15.4119C9.48267 15.3233 9.6 15.1367 9.6 14.9319V1.06521C9.6 0.860406 9.48267 0.67374 9.29813 0.58414Z" fill="white" />
											<path d="M14.5298 6.03223C14.2368 5.73926 13.7622 5.73926 13.4692 6.03223L12.5583 6.94302L11.6475 6.03223C11.3545 5.73926 10.8799 5.73926 10.5869 6.03223C10.294 6.3252 10.2939 6.80005 10.5869 7.09277L11.4978 8.00354L10.5869 8.9143C10.2939 9.20727 10.2939 9.68188 10.5869 9.97485C10.7334 10.1213 10.9253 10.1946 11.1172 10.1946C11.3091 10.1946 11.501 10.1213 11.6475 9.97485L12.5584 9.06405L13.4692 9.97485C13.6157 10.1213 13.8076 10.1946 13.9995 10.1946C14.1914 10.1946 14.3833 10.1213 14.5298 9.97485C14.8228 9.68188 14.8228 9.20727 14.5298 8.9143L13.6189 8.00354L14.5298 7.09277C14.8227 6.80005 14.8228 6.3252 14.5298 6.03223Z" fill="white" />
										</svg>
											: volume < 0.60 ? <svg className="cursor-pointer" onClick={toggleMute} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
												<path d="M9.29813 0.58414C9.11253 0.495606 8.89387 0.519073 8.73387 0.64814L3.5456 4.79854H1.06667C0.478933 4.79854 0 5.27747 0 5.86521V10.1319C0 10.7207 0.478933 11.1985 1.06667 11.1985H3.5456L8.7328 15.3489C8.82987 15.4257 8.94827 15.4652 9.06667 15.4652C9.1456 15.4652 9.22453 15.4471 9.29813 15.4119C9.48267 15.3233 9.6 15.1367 9.6 14.9319V1.06521C9.6 0.860406 9.48267 0.67374 9.29813 0.58414Z" fill="white" />
												<path d="M12.2986 4.2277C12.0885 4.02076 11.7514 4.02396 11.5445 4.23196C11.3376 4.4421 11.3397 4.77916 11.5488 4.98716C12.3552 5.7829 12.7989 6.85276 12.7989 7.99943C12.7989 9.1461 12.3552 10.216 11.5488 11.0117C11.3397 11.2176 11.3376 11.5557 11.5445 11.7658C11.649 11.8714 11.7866 11.9237 11.9232 11.9237C12.0586 11.9237 12.1941 11.8725 12.2986 11.769C13.3098 10.7738 13.8656 9.4341 13.8656 7.99943C13.8656 6.56476 13.3098 5.22503 12.2986 4.2277Z" fill="white" />
											</svg>
												: <svg onClick={toggleMute} className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">

													<path d="M9.29813 0.58414C9.11253 0.495606 8.89387 0.519073 8.73387 0.64814L3.5456 4.79854H1.06667C0.478933 4.79854 0 5.27747 0 5.86521V10.1319C0 10.7207 0.478933 11.1985 1.06667 11.1985H3.5456L8.7328 15.3489C8.82987 15.4257 8.94827 15.4652 9.06667 15.4652C9.1456 15.4652 9.22453 15.4471 9.29813 15.4119C9.48267 15.3233 9.6 15.1367 9.6 14.9319V1.06521C9.6 0.860406 9.48267 0.67374 9.29813 0.58414Z" fill="white" />
													<path d="M12.2986 4.2277C12.0885 4.02076 11.7514 4.02396 11.5445 4.23196C11.3376 4.4421 11.3397 4.77916 11.5488 4.98716C12.3552 5.7829 12.7989 6.85276 12.7989 7.99943C12.7989 9.1461 12.3552 10.216 11.5488 11.0117C11.3397 11.2176 11.3376 11.5557 11.5445 11.7658C11.649 11.8714 11.7866 11.9237 11.9232 11.9237C12.0586 11.9237 12.1941 11.8725 12.2986 11.769C13.3098 10.7738 13.8656 9.4341 13.8656 7.99943C13.8656 6.56476 13.3098 5.22503 12.2986 4.2277Z" fill="white" />
													<path d="M13.8076 2.72512C13.5975 2.51712 13.2604 2.51925 13.0524 2.72832C12.8455 2.93739 12.8476 3.27552 13.0556 3.48245C14.2684 4.68459 14.9362 6.28885 14.9362 7.99979C14.9362 9.71072 14.2684 11.3139 13.0556 12.5161C12.8476 12.7241 12.8455 13.0622 13.0524 13.2713C13.158 13.3758 13.2946 13.4281 13.4311 13.4281C13.5666 13.4281 13.7031 13.3769 13.8076 13.2734C15.2242 11.8707 16.0028 9.99765 16.0028 7.99979C16.0028 6.00192 15.2242 4.12885 13.8076 2.72512Z" fill="white" />
													<clipPath id="clip0_2_153230">
														<rect width="16" height="16" fill="white" />
													</clipPath>
												</svg>

									}
								</span>
								<div
									ref={soundParentRef}
									className=" bg-white rounded-full  opacity-0  w-0  group-hover:opacity-100 group-hover:w-[50px] transition-all duration-200 delay-150 ease-in"
									style={{ cursor: 'pointer' }}
									onClick={handleSoundMouseClick}
									onMouseMove={handleSoundMouseMove}
									onMouseUp={handleSoundMouseUp}
								>
									<div className="soundChild bg-orange-500 py-0.5	 rounded-full cursor-pointer relative"
										ref={soundChildRef}
										onMouseDown={handleSoundMouseDown}
										style={{ width: `${Math.floor(volume * 100)}%` }}

									>
										<div className={`absolute h-3 w-3 bg-orange-500 rounded-full -top-1 right-0 ${volume < 0.05 ? 'hidden' : 'block'}`}></div>
									</div>
								</div>
							</div>
						</div>
						{/* Time timeline */}
						<div className="time-container text-white text-[12px] select-none">
							<span className="current-time ">{handleFormatTime(currentTime)}</span>/<span>{handleFormatTime(duration)}</span>
						</div>
					</div>
					<div className="right-options flex items-center gap-2.5">
						{/* Mini Player */}

						<svg className="mini-player hover:cursor-pointer" onClick={handleTogglePictureInPicture} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M1.6 13.7143V2.28571H14.4V13.7143H1.6ZM0 0.571429C0 0.25584 0.179088 0 0.4 0H15.6C15.8209 0 16 0.25584 16 0.571429V15.4286C16 15.7441 15.8209 16 15.6 16H0.4C0.179088 16 0 15.7441 0 15.4286V0.571429ZM8.4 6.85714C8.17912 6.85714 8 7.11303 8 7.42857V12C8 12.3155 8.17912 12.5714 8.4 12.5714H13.2C13.4209 12.5714 13.6 12.3155 13.6 12V7.42857C13.6 7.11303 13.4209 6.85714 13.2 6.85714H8.4Z" fill="white" />
							<clipPath id="clip0_779_501">
								<rect width="16" height="16" fill="white" />
							</clipPath>
						</svg>
						{/* Full Screen */}

						<div className="full-screen hover:cursor-pointer" onClick={handleFullScreen}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M5.45455 0H0.363648C0.162648 0 0 0.162648 0 0.363648V5.45455C0 5.65555 0.162648 5.8182 0.363648 5.8182H1.09091C1.29191 5.8182 1.45456 5.65555 1.45456 5.45455V1.45456H5.45455C5.65555 1.45456 5.8182 1.29191 5.8182 1.09091V0.363648C5.8182 0.162648 5.65555 0 5.45455 0Z" fill="white" />
								<path d="M15.6382 0H10.5472C10.3462 0 10.1836 0.162648 10.1836 0.363648V1.09091C10.1836 1.29191 10.3462 1.45456 10.5472 1.45456H14.5472V5.45455C14.5472 5.65555 14.7099 5.8182 14.9109 5.8182H15.6381C15.8391 5.8182 16.0018 5.65555 16.0018 5.45455V0.363648C16.0018 0.162648 15.8392 0 15.6382 0Z" fill="white" />
								<path d="M15.6382 10.1836H14.9109C14.7099 10.1836 14.5473 10.3462 14.5473 10.5472V14.5472H10.5472C10.3462 14.5472 10.1836 14.7099 10.1836 14.9109V15.6381C10.1836 15.8391 10.3462 16.0018 10.5472 16.0018H15.6381C15.8391 16.0018 16.0018 15.8391 16.0018 15.6381V10.5472C16.0018 10.3462 15.8392 10.1836 15.6382 10.1836Z" fill="white" />
								<path d="M5.45455 14.5473H1.45456V10.5472C1.45456 10.3462 1.29191 10.1836 1.09091 10.1836H0.363648C0.162648 10.1836 0 10.3462 0 10.5472V15.6381C0 15.8391 0.162648 16.0018 0.363648 16.0018H5.45455C5.65555 16.0018 5.8182 15.8391 5.8182 15.6381V14.9109C5.8182 14.7099 5.65555 14.5473 5.45455 14.5473Z" fill="white" />
								<clipPath id="clip0_2_145280">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</svg>
						</div>

						{/* Options */}
						<div className="more-options  text-white text-xs" ref={menuRef}>
							<svg className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={() => setOptionOpen(prev => !prev)}>
								<path d="M6.5 8C6.5 8.827 7.173 9.5 8 9.5C8.827 9.5 9.5 8.827 9.5 8C9.5 7.173 8.827 6.5 8 6.5C7.173 6.5 6.5 7.173 6.5 8Z" fill="white" />
								<path d="M6.5 13C6.5 13.827 7.173 14.5 8 14.5C8.827 14.5 9.5 13.827 9.5 13C9.5 12.173 8.827 11.5 8 11.5C7.173 11.5 6.5 12.173 6.5 13Z" fill="white" />
								<path d="M6.5 3C6.5 3.827 7.173 4.5 8 4.5C8.827 4.5 9.5 3.827 9.5 3C9.5 2.173 8.827 1.5 8 1.5C7.173 1.5 6.5 2.173 6.5 3Z" fill="white" />
							</svg>

							{optionOpen && <div className="absolute bottom-11 right-4 bg-[#3D3D3DA1] rounded-sm text-white" >
								<ul >
									{
										mainMenus.map(item => <li key={item?.id} onClick={() => handleSelectedOption(item?.value)} className="hover:cursor-pointer  flex items-center gap-1.5 py-2 px-[15px] hover:bg-[#4F4F4FA1]"><span>{item.icon}</span> {item?.name}</li>)
									}
								</ul>
							</div>}

							{selectedOptionsOpen && selectedOption === 'quality' && <div className="absolute bottom-11 right-4 text-xs text-white bg-[#3D3D3DA1] rounded max-w-[152px] w-full">
								<ul>
									<li onClick={() => setSelectedOption(prev => !prev)} className="py-2 px-[15px] hover:bg-[#4F4F4FA1] hover:cursor-pointer">720p</li>
									<li onClick={() => setSelectedOption(prev => !prev)} className="py-2 px-[15px] hover:bg-[#4F4F4FA1] hover:cursor-pointer">480p</li>
									<li onClick={() => setSelectedOption(prev => !prev)} className="py-2 px-[15px] hover:bg-[#4F4F4FA1] hover:cursor-pointer">360p</li>
									<li onClick={() => setSelectedOption(prev => !prev)} className="py-2 px-[15px] hover:bg-[#4F4F4FA1] hover:cursor-pointer">144p</li>
								</ul>
							</div>}
							{selectedOptionsOpen && selectedOption === 'speed' && <div className="absolute bottom-11 right-4 text-white text-xs bg-[#3D3D3DA1] rounded max-w-[152px] w-full">
								<ul>
									<li onClick={() => setSelectedOption(prev => !prev)} className="py-2 px-[15px] hover:bg-[#4F4F4FA1] hover:cursor-pointer">2x</li>
									<li onClick={() => setSelectedOption(prev => !prev)} className="py-2 px-[15px] hover:bg-[#4F4F4FA1] hover:cursor-pointer">1.5x</li>
									<li onClick={() => setSelectedOption(prev => !prev)} className="py-2 px-[15px] hover:bg-[#4F4F4FA1] hover:cursor-pointer">1.25x</li>
									<li onClick={() => setSelectedOption(prev => !prev)} className="py-2 px-[15px] hover:bg-[#4F4F4FA1] hover:cursor-pointer">1x</li>
									<li onClick={() => setSelectedOption(prev => !prev)} className="py-2 px-[15px] hover:bg-[#4F4F4FA1] hover:cursor-pointer">0.5x</li>
								</ul>
							</div>}
							{selectedOptionsOpen && selectedOption === 'report' && <div className="absolute bottom-11 right-4 text-white bg-[#3D3D3DA1] rounded max-w-[200px] w-full">
								<ul>
									{reportOptions?.map(item => <li onClick={() => setSelectedReport(item?.id)} key={item?.id} className="py-2 px-1.5 text-xs hover:bg-[#4F4F4FA1] hover:cursor-pointer flex gap-1">{item?.name} <span className={`${selectedReport === item?.id ? 'inline' : 'hidden'}`}>
										<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path id="Vector" d="M5.59511 11.8581C5.39409 11.8581 5.19308 11.7811 5.03995 11.628L0.23035 6.81826C-0.0767834 6.51128 -0.0767834 6.01495 0.23035 5.70796C0.537337 5.40097 1.03352 5.40097 1.34066 5.70796L5.59511 9.96241L14.6595 0.898209C14.9664 0.591222 15.4626 0.591222 15.7698 0.898209C16.0767 1.20531 16.0767 1.70153 15.7698 2.00866L6.15041 11.628C6.07755 11.701 5.99099 11.7589 5.8957 11.7984C5.80041 11.8379 5.69825 11.8582 5.59511 11.8581Z" fill="white" />

										</svg>
									</span></li>)}

									<div className="flex justify-end px-2 py-2">
										<button onClick={() => setSelectedOption(prev => !prev)} className="bg-[#F97316] px-2 py-1.5 rounded-sm font-medium text-xs">Submit</button>
									</div>
								</ul>
							</div>}
						</div>
					</div>
				</div>
			</div>
			{/* Middle Play Button */}
			<div className="absolute  inset-0 flex items-center justify-center cursor-pointer group " onClick={togglePlayPause}
			>
				<div className={`${!isPlaying ? '' : 'opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible group-hover:delay-75 transition-all duration-150 ease-in delay-200'}`}>
					{
						isPlaying ? (
							<span >
								<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
									<path d="M37 72C56.33 72 72 56.33 72 37C72 17.67 56.33 2 37 2C17.67 2 2 17.67 2 37C2 56.33 17.67 72 37 72Z" fill="black" fillOpacity="0.24" stroke="white" strokeWidth="4" />
									<path d="M34.75 27.4643V45.5357C34.75 46.1893 34.4904 46.8161 34.0282 47.2782C33.5661 47.7404 32.9393 48 32.2857 48H31.4643C30.8107 48 30.1839 47.7404 29.7218 47.2782C29.2596 46.8161 29 46.1893 29 45.5357V27.4643C29 26.8107 29.2596 26.1839 29.7218 25.7218C30.1839 25.2596 30.8107 25 31.4643 25H32.2857C32.9393 25 33.5661 25.2596 34.0282 25.7218C34.4904 26.1839 34.75 26.8107 34.75 27.4643ZM42.9643 25H42.1429C41.4893 25 40.8625 25.2596 40.4003 25.7218C39.9382 26.1839 39.6786 26.8107 39.6786 27.4643V45.5357C39.6786 46.1893 39.9382 46.8161 40.4003 47.2782C40.8625 47.7404 41.4893 48 42.1429 48H42.9643C43.6179 48 44.2447 47.7404 44.7068 47.2782C45.1689 46.8161 45.4286 46.1893 45.4286 45.5357V27.4643C45.4286 26.8107 45.1689 26.1839 44.7068 25.7218C44.2447 25.2596 43.6179 25 42.9643 25Z" fill="white" />
									<clipPath id="clip0_1251_11939">
										<rect width="74" height="74" fill="white" />
									</clipPath>
								</svg>
							</span>) : (<span >
								<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
									<path d="M37 72C56.33 72 72 56.33 72 37C72 17.67 56.33 2 37 2C17.67 2 2 17.67 2 37C2 56.33 17.67 72 37 72Z" fill="black" fillOpacity="0.24" stroke="white" strokeWidth="4" />
									<path d="M31.9419 25.5705C30.6097 24.8593 29 25.8246 29 27.3348V46.6651C29 48.1753 30.6096 49.1406 31.9419 48.4294L50.0461 38.7647C51.4569 38.0115 51.4569 35.9892 50.0461 35.236L31.9419 25.5705Z" fill="white" />
									<clipPath id="clip0_1251_11930">
										<rect width="74" height="74" fill="white" />
									</clipPath>
								</svg>
							</span>)
					}
				</div>
			</div>


		</div>
	);
};

export default VideoPlayer;