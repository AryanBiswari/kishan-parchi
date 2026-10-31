// // document.addEventListener('DOMContentLoaded', () => {
// //     document.getElementById('p_date').innerText = new Date().toLocaleDateString('en-IN');
// // });

// // function updateKisanName() {
// //     document.getElementById('p_name').innerText = document.getElementById('kisanName').value;
// // }
// // // --- PWA (Desktop/Mobile) Install Logic ---
// // let deferredPrompt;
// // const installBtn = document.getElementById('installBtn');

// // // जब ब्राउज़र को लगता है कि ऐप इंस्टॉल किया जा सकता है, तब यह इवेंट चलेगा
// // window.addEventListener('beforeinstallprompt', (e) => {
// //     // ब्राउज़र का डिफ़ॉल्ट पॉपअप रोकें
// //     e.preventDefault();
    
// //     // इवेंट को सेव करें ताकि बटन क्लिक पर चलाया जा सके
// //     deferredPrompt = e;
    
// //     // अब हमारा कस्टम "App इंस्टॉल करें" बटन दिखाएं
// //     if (installBtn) installBtn.classList.remove('hidden');
// // });

// // // जब यूज़र "App इंस्टॉल करें" बटन पर क्लिक करेगा
// // if (installBtn) {
// //     installBtn.addEventListener('click', async () => {
// //         if (deferredPrompt !== null) {
// //             // असली इंस्टॉल प्रॉम्प्ट खोलें
// //             deferredPrompt.prompt();
            
// //             // यूज़र के जवाब (Install या Cancel) का इंतज़ार करें
// //             const { outcome } = await deferredPrompt.userChoice;
            
// //             if (outcome === 'accepted') {
// //                 console.log('App Successfully Installed!');
// //             }
            
// //             // एक बार इस्तेमाल होने के बाद इसे खाली कर दें
// //             deferredPrompt = null;
            
// //             // बटन को हमेशा के लिए छुपा दें
// //             installBtn.classList.add('hidden');
// //         }
// //     });
// // }

// // // अगर यूज़र ने ऐप इंस्टॉल कर लिया, तो बटन छुपा दें
// // window.addEventListener('appinstalled', () => {
// //     deferredPrompt = null;
// //     if (installBtn) installBtn.classList.add('hidden');
// // });

// // function calculate(isManualVajan) {
// //     const bori = parseFloat(document.getElementById('bori').value) || 0;
// //     const bharti = parseFloat(document.getElementById('bharti').value) || 0;
// //     const dar = parseFloat(document.getElementById('dar').value) || 0;
// //     const tulaaiRate = parseFloat(document.getElementById('tulaaiRate').value) || 0;
// //     const commRate = parseFloat(document.getElementById('commRate').value) || 0;

// //     const advRakam = parseFloat(document.getElementById('advRakam').value) || 0;
// //     const advMonths = parseFloat(document.getElementById('advMonths').value) || 0;
// //     const advRate = parseFloat(document.getElementById('advRate').value) || 0;

// //     let vajan = 0;
// //     const fullBori = Math.floor(bori);
// //     const fraction = bori - fullBori;

// //     if (!isManualVajan) {
// //         const fullBoriKg = fullBori * bharti;
// //         const looseKg = fraction * 50; 
// //         vajan = (fullBoriKg + looseKg) / 100; 
// //         if(bori > 0 || bharti > 0) {
// //             document.getElementById('vajanInput').value = vajan.toFixed(2);
// //         } else {
// //             document.getElementById('vajanInput').value = '';
// //         }
// //     } else {
// //         vajan = parseFloat(document.getElementById('vajanInput').value) || 0;
// //     }

// //     const rakam = vajan * dar;
    
// //     let tulaaiBori = fullBori; 
// //     if (fraction >= 0.5) tulaaiBori = fullBori + 1;
// //     else if (fraction > 0) tulaaiBori = fullBori;
    
// //     const tulaai = tulaaiBori * tulaaiRate;
// //     const commission = (rakam * commRate) / 100;

// //     const advInterest = (advRakam * advMonths * advRate) / 100;
// //     const totalAdvanceDeduction = advRakam + advInterest;

// //     const hasCrop = (rakam > 0 || vajan > 0);
// //     const hasAdvance = (advRakam > 0);

// //     // --- स्मार्ट विज़िबिलिटी (Fix Applied Here) ---
// //     if (hasCrop) {
// //         // CSS क्लास को हटाकर बॉक्स को दिखाएं
// //         document.getElementById('cropResultBox').classList.remove('hidden');
        
// //         document.getElementById('print_vajan_row').style.display = 'table-row';
// //         document.getElementById('print_dar_row').style.display = 'table-row';
// //         document.getElementById('print_rakam_row').style.display = 'table-row';
// //         document.getElementById('print_tulaai_row').style.display = 'table-row';
// //         document.getElementById('print_comm_row').style.display = 'table-row';
// //         document.getElementById('print_crop_hr').style.display = 'table-row';
// //     } else {
// //         // CSS क्लास लगाकर बॉक्स को छुपाएं
// //         document.getElementById('cropResultBox').classList.add('hidden');
        
// //         document.getElementById('print_vajan_row').style.display = 'none';
// //         document.getElementById('print_dar_row').style.display = 'none';
// //         document.getElementById('print_rakam_row').style.display = 'none';
// //         document.getElementById('print_tulaai_row').style.display = 'none';
// //         document.getElementById('print_comm_row').style.display = 'none';
// //         document.getElementById('print_crop_hr').style.display = 'none';
// //     }

// //     let finalRakam = 0;
// //     if (hasCrop) {
// //         finalRakam = rakam - tulaai - commission - totalAdvanceDeduction;
// //     } else if (hasAdvance) {
// //         finalRakam = totalAdvanceDeduction;
// //     }

// //     document.getElementById('rakamTxt').innerText = Math.round(rakam).toLocaleString('en-IN');
// //     document.getElementById('tulaaiLabel').innerText = `तुलाई (@ ₹${tulaaiRate}/बोरी):`;
// //     document.getElementById('tulaaiTxt').innerText = Math.round(tulaai).toLocaleString('en-IN');
// //     document.getElementById('commLabel').innerText = `खर्चा (@ ${commRate}%):`;
// //     document.getElementById('commTxt').innerText = Math.round(commission).toLocaleString('en-IN');
    
// //     const advBox = document.getElementById('advResultBox');
// //     if (advRakam > 0) {
// //         advBox.classList.remove('hidden'); // Fix Applied Here
// //         document.getElementById('advRakamTxt').innerText = Math.round(advRakam).toLocaleString('en-IN');
// //         document.getElementById('advInterestTxt').innerText = Math.round(advInterest).toLocaleString('en-IN');
// //     } else {
// //         advBox.classList.add('hidden'); // Fix Applied Here
// //     }

// //     document.getElementById('finalRakamTxt').innerText = Math.round(finalRakam).toLocaleString('en-IN');

// //     document.getElementById('p_bori').innerText = bori;
// //     document.getElementById('p_bharti').innerText = bharti;
// //     document.getElementById('p_vajan').innerText = vajan.toFixed(2);
// //     document.getElementById('p_dar').innerText = dar;
// //     document.getElementById('p_rakam').innerText = Math.round(rakam);
// //     document.getElementById('p_tulaai_label').innerText = "तुलाई (-):";
// //     document.getElementById('p_tulaai').innerText = Math.round(tulaai);
// //     document.getElementById('p_comm_label').innerText = "खर्चा (-):";
// //     document.getElementById('p_comm').innerText = Math.round(commission);
    
// //     const printAdvRow = document.getElementById('print_adv_row');
// //     const printAdvIntRow = document.getElementById('print_adv_int_row');
    
// //     if (advRakam > 0) {
// //         printAdvRow.style.display = 'table-row';
// //         document.getElementById('p_adv_rakam').innerText = Math.round(advRakam);
        
// //         if(advInterest > 0) {
// //             printAdvIntRow.style.display = 'table-row';
// //             document.getElementById('p_adv_int_label').innerText = `ब्याज (@ ${advRate}% x ${advMonths} माह):`;
// //             document.getElementById('p_adv_int').innerText = Math.round(advInterest);
// //         } else {
// //             printAdvIntRow.style.display = 'none';
// //         }
// //     } else {
// //         printAdvRow.style.display = 'none';
// //         printAdvIntRow.style.display = 'none';
// //     }

// //     document.getElementById('p_final').innerText = Math.round(finalRakam);
    
// //     document.getElementById('print_bori_row').style.display = bori > 0 ? 'table-row' : 'none';
// //     document.getElementById('print_bharti_row').style.display = bharti > 0 ? 'table-row' : 'none';
// // }

// // function printParchi() {
    
// //     window.print();
// // }

// // function resetForm() {
// //     document.getElementById('kisanName').value = '';
// //     document.getElementById('bori').value = '';
// //     document.getElementById('bharti').value = '';
// //     document.getElementById('vajanInput').value = '';
// //     document.getElementById('dar').value = '';
// //     document.getElementById('advRakam').value = '';
// //     document.getElementById('advMonths').value = '';
// //     updateKisanName();
// //     calculate(false);
// //     document.getElementById('kisanName').focus();
// // }

// // document.addEventListener('keydown', function(event) {
// //     if (event.key === 'Enter') {
// //         event.preventDefault(); 
// //         const activeId = document.activeElement.id;

// //         function focusNext(nextId) {
// //             const nextInput = document.getElementById(nextId);
// //             if(nextInput) {
// //                 nextInput.focus();
// //                 nextInput.select(); 
// //             }
// //         }

// //         if (activeId === 'kisanName') focusNext('bori');
// //         else if (activeId === 'bori') focusNext('bharti');
// //         else if (activeId === 'bharti') focusNext('vajanInput');
// //         else if (activeId === 'vajanInput') focusNext('dar');
// //         else if (activeId === 'dar') {
// //             if(document.getElementById('advRakam').value === "") focusNext('advRakam');
// //             else printParchi();
// //         }
// //         else if (activeId === 'advRakam') focusNext('advMonths');
// //         else if (activeId === 'advMonths') focusNext('advRate');
// //         else if (activeId === 'advRate') printParchi();
// //     }
// // });

// // document.addEventListener('DOMContentLoaded', () => {
// //     document.getElementById('p_date').innerText = new Date().toLocaleDateString('en-IN');
// // });

// // function updateKisanName() {
// //     document.getElementById('p_name').innerText = document.getElementById('kisanName').value;
// // }

// // // --- PWA (Desktop/Mobile) Install Logic ---
// // let deferredPrompt;
// // const installBtn = document.getElementById('installBtn');

// // // जब ब्राउज़र को लगता है कि ऐप इंस्टॉल किया जा सकता है, तब यह इवेंट चलेगा
// // window.addEventListener('beforeinstallprompt', (e) => {
// //     // ब्राउज़र का डिफ़ॉल्ट पॉपअप रोकें
// //     e.preventDefault();
    
// //     // इवेंट को सेव करें ताकि बटन क्लिक पर चलाया जा सके
// //     deferredPrompt = e;
    
// //     // अब हमारा कस्टम "App इंस्टॉल करें" बटन दिखाएं
// //     if (installBtn) installBtn.classList.remove('hidden');
// // });

// // // जब यूज़र "App इंस्टॉल करें" बटन पर क्लिक करेगा
// // if (installBtn) {
// //     installBtn.addEventListener('click', async () => {
// //         if (deferredPrompt !== null) {
// //             // असली इंस्टॉल प्रॉम्प्ट खोलें
// //             deferredPrompt.prompt();
            
// //             // यूज़र के जवाब (Install या Cancel) का इंतज़ार करें
// //             const { outcome } = await deferredPrompt.userChoice;
            
// //             if (outcome === 'accepted') {
// //                 console.log('App Successfully Installed!');
// //             }
            
// //             // एक बार इस्तेमाल होने के बाद इसे खाली कर दें
// //             deferredPrompt = null;
            
// //             // बटन को हमेशा के लिए छुपा दें
// //             installBtn.classList.add('hidden');
// //         }
// //     });
// // }

// // // अगर यूज़र ने ऐप इंस्टॉल कर लिया, तो बटन छुपा दें
// // window.addEventListener('appinstalled', () => {
// //     deferredPrompt = null;
// //     if (installBtn) installBtn.classList.add('hidden');
// // });

// // function calculate(isManualVajan) {
// //     const bori = parseFloat(document.getElementById('bori').value) || 0;
// //     const bharti = parseFloat(document.getElementById('bharti').value) || 0;
// //     const dar = parseFloat(document.getElementById('dar').value) || 0;
// //     const tulaaiRate = parseFloat(document.getElementById('tulaaiRate').value) || 0;
// //     const commRate = parseFloat(document.getElementById('commRate').value) || 0;

// //     const advRakam = parseFloat(document.getElementById('advRakam').value) || 0;
// //     const advMonths = parseFloat(document.getElementById('advMonths').value) || 0;
// //     const advRate = parseFloat(document.getElementById('advRate').value) || 0;

// //     let vajan = 0;
// //     const fullBori = Math.floor(bori);
// //     const fraction = bori - fullBori;

// //     if (!isManualVajan) {
// //         const fullBoriKg = fullBori * bharti;
// //         // सुधरा हुआ हिस्सा: fraction को 100 से गुणा करें और Math.round का उपयोग करें
// //         const looseKg = Math.round(fraction * 100); 
// //         vajan = (fullBoriKg + looseKg) / 100; 
        
// //         if(bori > 0 || bharti > 0) {
// //             document.getElementById('vajanInput').value = vajan.toFixed(2);
// //         } else {
// //             document.getElementById('vajanInput').value = '';
// //         }
// //     } else {
// //         vajan = parseFloat(document.getElementById('vajanInput').value) || 0;
// //     }

// //     const rakam = vajan * dar;
    
// //     let tulaaiBori = fullBori; 
// //     if (fraction >= 0.5) tulaaiBori = fullBori + 1;
// //     else if (fraction > 0) tulaaiBori = fullBori;
    
// //     const tulaai = tulaaiBori * tulaaiRate;
// //     const commission = (rakam * commRate) / 100;

// //     const advInterest = (advRakam * advMonths * advRate) / 100;
// //     const totalAdvanceDeduction = advRakam + advInterest;

// //     const hasCrop = (rakam > 0 || vajan > 0);
// //     const hasAdvance = (advRakam > 0);

// //     // --- स्मार्ट विज़िबिलिटी ---
// //     if (hasCrop) {
// //         document.getElementById('cropResultBox').classList.remove('hidden');
        
// //         document.getElementById('print_vajan_row').style.display = 'table-row';
// //         document.getElementById('print_dar_row').style.display = 'table-row';
// //         document.getElementById('print_rakam_row').style.display = 'table-row';
// //         document.getElementById('print_tulaai_row').style.display = 'table-row';
// //         document.getElementById('print_comm_row').style.display = 'table-row';
// //         document.getElementById('print_crop_hr').style.display = 'table-row';
// //     } else {
// //         document.getElementById('cropResultBox').classList.add('hidden');
        
// //         document.getElementById('print_vajan_row').style.display = 'none';
// //         document.getElementById('print_dar_row').style.display = 'none';
// //         document.getElementById('print_rakam_row').style.display = 'none';
// //         document.getElementById('print_tulaai_row').style.display = 'none';
// //         document.getElementById('print_comm_row').style.display = 'none';
// //         document.getElementById('print_crop_hr').style.display = 'none';
// //     }

// //     let finalRakam = 0;
// //     if (hasCrop) {
// //         finalRakam = rakam - tulaai - commission - totalAdvanceDeduction;
// //     } else if (hasAdvance) {
// //         finalRakam = totalAdvanceDeduction;
// //     }

// //     document.getElementById('rakamTxt').innerText = Math.round(rakam).toLocaleString('en-IN');
// //     document.getElementById('tulaaiLabel').innerText = `तुलाई (@ ₹${tulaaiRate}/बोरी):`;
// //     document.getElementById('tulaaiTxt').innerText = Math.round(tulaai).toLocaleString('en-IN');
// //     document.getElementById('commLabel').innerText = `खर्चा (@ ${commRate}%):`;
// //     document.getElementById('commTxt').innerText = Math.round(commission).toLocaleString('en-IN');
    
// //     const advBox = document.getElementById('advResultBox');
// //     if (advRakam > 0) {
// //         advBox.classList.remove('hidden'); 
// //         document.getElementById('advRakamTxt').innerText = Math.round(advRakam).toLocaleString('en-IN');
// //         document.getElementById('advInterestTxt').innerText = Math.round(advInterest).toLocaleString('en-IN');
// //     } else {
// //         advBox.classList.add('hidden'); 
// //     }

// //     document.getElementById('finalRakamTxt').innerText = Math.round(finalRakam).toLocaleString('en-IN');

// //     document.getElementById('p_bori').innerText = bori;
// //     document.getElementById('p_bharti').innerText = bharti;
// //     document.getElementById('p_vajan').innerText = vajan.toFixed(2);
// //     document.getElementById('p_dar').innerText = dar;
// //     document.getElementById('p_rakam').innerText = Math.round(rakam);
// //     document.getElementById('p_tulaai_label').innerText = "तुलाई (-):";
// //     document.getElementById('p_tulaai').innerText = Math.round(tulaai);
// //     document.getElementById('p_comm_label').innerText = "खर्चा (-):";
// //     document.getElementById('p_comm').innerText = Math.round(commission);
    
// //     const printAdvRow = document.getElementById('print_adv_row');
// //     const printAdvIntRow = document.getElementById('print_adv_int_row');
    
// //     if (advRakam > 0) {
// //         printAdvRow.style.display = 'table-row';
// //         document.getElementById('p_adv_rakam').innerText = Math.round(advRakam);
        
// //         if(advInterest > 0) {
// //             printAdvIntRow.style.display = 'table-row';
// //             document.getElementById('p_adv_int_label').innerText = `ब्याज (@ ${advRate}% x ${advMonths} माह):`;
// //             document.getElementById('p_adv_int').innerText = Math.round(advInterest);
// //         } else {
// //             printAdvIntRow.style.display = 'none';
// //         }
// //     } else {
// //         printAdvRow.style.display = 'none';
// //         printAdvIntRow.style.display = 'none';
// //     }

// //     document.getElementById('p_final').innerText = Math.round(finalRakam);
    
// //     document.getElementById('print_bori_row').style.display = bori > 0 ? 'table-row' : 'none';
// //     document.getElementById('print_bharti_row').style.display = bharti > 0 ? 'table-row' : 'none';
// // }

// // function printParchi() {
// //     window.print();
// // }

// // function resetForm() {
// //     document.getElementById('kisanName').value = '';
// //     document.getElementById('bori').value = '';
// //     document.getElementById('bharti').value = '';
// //     document.getElementById('vajanInput').value = '';
// //     document.getElementById('dar').value = '';
// //     document.getElementById('advRakam').value = '';
// //     document.getElementById('advMonths').value = '';
// //     updateKisanName();
// //     calculate(false);
// //     document.getElementById('kisanName').focus();
// // }

// // document.addEventListener('keydown', function(event) {
// //     if (event.key === 'Enter') {
// //         event.preventDefault(); 
// //         const activeId = document.activeElement.id;

// //         function focusNext(nextId) {
// //             const nextInput = document.getElementById(nextId);
// //             if(nextInput) {
// //                 nextInput.focus();
// //                 nextInput.select(); 
// //             }
// //         }

// //         if (activeId === 'kisanName') focusNext('bori');
// //         else if (activeId === 'bori') focusNext('bharti');
// //         else if (activeId === 'bharti') focusNext('vajanInput');
// //         else if (activeId === 'vajanInput') focusNext('dar');
// //         else if (activeId === 'dar') {
// //             if(document.getElementById('advRakam').value === "") focusNext('advRakam');
// //             else printParchi();
// //         }
// //         else if (activeId === 'advRakam') focusNext('advMonths');
// //         else if (activeId === 'advMonths') focusNext('advRate');
// //         else if (activeId === 'advRate') printParchi();
// //     }
// // });

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('p_date').innerText = new Date().toLocaleDateString('en-IN');
// });

// function updateKisanName() {
//     document.getElementById('p_name').innerText = document.getElementById('kisanName').value;
// }

// // --- PWA (Desktop/Mobile) Install Logic ---
// let deferredPrompt;
// const installBtn = document.getElementById('installBtn');

// window.addEventListener('beforeinstallprompt', (e) => {
//     e.preventDefault();
//     deferredPrompt = e;
//     if (installBtn) installBtn.classList.remove('hidden');
// });

// if (installBtn) {
//     installBtn.addEventListener('click', async () => {
//         if (deferredPrompt !== null) {
//             deferredPrompt.prompt();
//             const { outcome } = await deferredPrompt.userChoice;
//             if (outcome === 'accepted') {
//                 console.log('App Successfully Installed!');
//             }
//             deferredPrompt = null;
//             installBtn.classList.add('hidden');
//         }
//     });
// }

// window.addEventListener('appinstalled', () => {
//     deferredPrompt = null;
//     if (installBtn) installBtn.classList.add('hidden');
// });

// // --- Main Calculation Logic ---
// function calculate(isManualVajan) {
//     // बोरी की वैल्यू को पॉइंट के हिसाब से अलग करने के लिए उसे String की तरह लेंगे
//     const boriStr = document.getElementById('bori').value || "0";
//     const bharti = parseFloat(document.getElementById('bharti').value) || 0;
//     const dar = parseFloat(document.getElementById('dar').value) || 0;
//     const tulaaiRate = parseFloat(document.getElementById('tulaaiRate').value) || 0;
//     const commRate = parseFloat(document.getElementById('commRate').value) || 0;

//     const advRakam = parseFloat(document.getElementById('advRakam').value) || 0;
//     const advMonths = parseFloat(document.getElementById('advMonths').value) || 0;
//     const advRate = parseFloat(document.getElementById('advRate').value) || 0;

//     // --- मंडी का पसेरी लॉजिक (Mandi Logic Fix) ---
//     let fullBori = 0;
//     let loosePaseri = 0;

//     // चेक करें कि क्या यूज़र ने पॉइंट (.) लगाया है?
//     if (boriStr.includes('.')) {
//         const parts = boriStr.split('.'); // 30.11 को [30, 11] में तोड़ देगा
//         fullBori = parseInt(parts[0]) || 0;
//         loosePaseri = parseInt(parts[1]) || 0; // पॉइंट के बाद वाला नंबर पसेरी है
//     } else {
//         fullBori = parseInt(boriStr) || 0;
//     }

//     let vajan = 0;

//     if (!isManualVajan) {
//         const fullBoriKg = fullBori * bharti;
//         const looseKg = loosePaseri * 5; // हर पॉइंट के बाद वाले नंबर का मतलब 5 किलो है
        
//         vajan = (fullBoriKg + looseKg) / 100; 
        
//         if (fullBori > 0 || loosePaseri > 0 || bharti > 0) {
//             document.getElementById('vajanInput').value = vajan.toFixed(2);
//         } else {
//             document.getElementById('vajanInput').value = '';
//         }
//     } else {
//         vajan = parseFloat(document.getElementById('vajanInput').value) || 0;
//     }

//     const rakam = vajan * dar;
    
//     // --- तुलाई लॉजिक (.5 या 5 पसेरी से ज़्यादा होने पर) ---
//     let tulaaiBori = fullBori; 
//     if (loosePaseri >= 5) {
//         tulaaiBori = fullBori + 1; // 5 पसेरी (25 किलो) या उससे ज़्यादा होने पर तुलाई 1 बोरी एक्स्ट्रा कटेगी
//     }
    
//     const tulaai = tulaaiBori * tulaaiRate;
//     const commission = (rakam * commRate) / 100;

//     const advInterest = (advRakam * advMonths * advRate) / 100;
//     const totalAdvanceDeduction = advRakam + advInterest;

//     const hasCrop = (rakam > 0 || vajan > 0);
//     const hasAdvance = (advRakam > 0);

//     // स्मार्ट विज़िबिलिटी 
//     if (hasCrop) {
//         document.getElementById('cropResultBox').classList.remove('hidden');
//         document.getElementById('print_vajan_row').style.display = 'table-row';
//         document.getElementById('print_dar_row').style.display = 'table-row';
//         document.getElementById('print_rakam_row').style.display = 'table-row';
//         document.getElementById('print_tulaai_row').style.display = 'table-row';
//         document.getElementById('print_comm_row').style.display = 'table-row';
//         document.getElementById('print_crop_hr').style.display = 'table-row';
//     } else {
//         document.getElementById('cropResultBox').classList.add('hidden');
//         document.getElementById('print_vajan_row').style.display = 'none';
//         document.getElementById('print_dar_row').style.display = 'none';
//         document.getElementById('print_rakam_row').style.display = 'none';
//         document.getElementById('print_tulaai_row').style.display = 'none';
//         document.getElementById('print_comm_row').style.display = 'none';
//         document.getElementById('print_crop_hr').style.display = 'none';
//     }

//     let finalRakam = 0;
//     if (hasCrop) {
//         finalRakam = rakam - tulaai - commission - totalAdvanceDeduction;
//     } else if (hasAdvance) {
//         finalRakam = totalAdvanceDeduction;
//     }

//     document.getElementById('rakamTxt').innerText = Math.round(rakam).toLocaleString('en-IN');
//     document.getElementById('tulaaiLabel').innerText = `तुलाई (@ ₹${tulaaiRate}/बोरी):`;
//     document.getElementById('tulaaiTxt').innerText = Math.round(tulaai).toLocaleString('en-IN');
//     document.getElementById('commLabel').innerText = `खर्चा (@ ${commRate}%):`;
//     document.getElementById('commTxt').innerText = Math.round(commission).toLocaleString('en-IN');
    
//     const advBox = document.getElementById('advResultBox');
//     if (advRakam > 0) {
//         advBox.classList.remove('hidden'); 
//         document.getElementById('advRakamTxt').innerText = Math.round(advRakam).toLocaleString('en-IN');
//         document.getElementById('advInterestTxt').innerText = Math.round(advInterest).toLocaleString('en-IN');
//     } else {
//         advBox.classList.add('hidden'); 
//     }

//     document.getElementById('finalRakamTxt').innerText = Math.round(finalRakam).toLocaleString('en-IN');

//     // Print values update
//     document.getElementById('p_bori').innerText = boriStr; // पॉइंट वाली बोरी वैसी ही छपेगी
//     document.getElementById('p_bharti').innerText = bharti;
//     document.getElementById('p_vajan').innerText = vajan.toFixed(2);
//     document.getElementById('p_dar').innerText = dar;
//     document.getElementById('p_rakam').innerText = Math.round(rakam);
//     document.getElementById('p_tulaai_label').innerText = "तुलाई (-):";
//     document.getElementById('p_tulaai').innerText = Math.round(tulaai);
//     document.getElementById('p_comm_label').innerText = "खर्चा (-):";
//     document.getElementById('p_comm').innerText = Math.round(commission);
    
//     const printAdvRow = document.getElementById('print_adv_row');
//     const printAdvIntRow = document.getElementById('print_adv_int_row');
    
//     if (advRakam > 0) {
//         printAdvRow.style.display = 'table-row';
//         document.getElementById('p_adv_rakam').innerText = Math.round(advRakam);
        
//         if(advInterest > 0) {
//             printAdvIntRow.style.display = 'table-row';
//             document.getElementById('p_adv_int_label').innerText = `ब्याज (@ ${advRate}% x ${advMonths} माह):`;
//             document.getElementById('p_adv_int').innerText = Math.round(advInterest);
//         } else {
//             printAdvIntRow.style.display = 'none';
//         }
//     } else {
//         printAdvRow.style.display = 'none';
//         printAdvIntRow.style.display = 'none';
//     }

//     document.getElementById('p_final').innerText = Math.round(finalRakam);
    
//     document.getElementById('print_bori_row').style.display = (fullBori > 0 || loosePaseri > 0) ? 'table-row' : 'none';
//     document.getElementById('print_bharti_row').style.display = bharti > 0 ? 'table-row' : 'none';
// }

// function printParchi() {
//     window.print();
// }

// function resetForm() {
//     document.getElementById('kisanName').value = '';
//     document.getElementById('bori').value = '';
//     document.getElementById('bharti').value = '';
//     document.getElementById('vajanInput').value = '';
//     document.getElementById('dar').value = '';
//     document.getElementById('advRakam').value = '';
//     document.getElementById('advMonths').value = '';
//     updateKisanName();
//     calculate(false);
//     document.getElementById('kisanName').focus();
// }

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault(); 
//         const activeId = document.activeElement.id;

//         function focusNext(nextId) {
//             const nextInput = document.getElementById(nextId);
//             if(nextInput) {
//                 nextInput.focus();
//                 nextInput.select(); 
//             }
//         }

//         if (activeId === 'kisanName') focusNext('bori');
//         else if (activeId === 'bori') focusNext('bharti');
//         else if (activeId === 'bharti') focusNext('vajanInput');
//         else if (activeId === 'vajanInput') focusNext('dar');
//         else if (activeId === 'dar') {
//             if(document.getElementById('advRakam').value === "") focusNext('advRakam');
//             else printParchi();
//         }
//         else if (activeId === 'advRakam') focusNext('advMonths');
//         else if (activeId === 'advMonths') focusNext('advRate');
//         else if (activeId === 'advRate') printParchi();
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('p_date').innerText = new Date().toLocaleDateString('en-IN');
// });

// function updateKisanName() {
//     document.getElementById('p_name').innerText = document.getElementById('kisanName').value;
// }

// // --- PWA (Desktop/Mobile) Install Logic ---
// let deferredPrompt;
// const installBtn = document.getElementById('installBtn');

// window.addEventListener('beforeinstallprompt', (e) => {
//     e.preventDefault();
//     deferredPrompt = e;
//     if (installBtn) installBtn.classList.remove('hidden');
// });

// if (installBtn) {
//     installBtn.addEventListener('click', async () => {
//         if (deferredPrompt !== null) {
//             deferredPrompt.prompt();
//             const { outcome } = await deferredPrompt.userChoice;
//             if (outcome === 'accepted') {
//                 console.log('App Successfully Installed!');
//             }
//             deferredPrompt = null;
//             installBtn.classList.add('hidden');
//         }
//     });
// }

// window.addEventListener('appinstalled', () => {
//     deferredPrompt = null;
//     if (installBtn) installBtn.classList.add('hidden');
// });

// function calculate(isManualVajan) {
//     // इनपुट को टेक्स्ट के रूप में लें ताकि दशमलव के बाद का नंबर सही से निकाल सकें
//     const boriInput = document.getElementById('bori').value.trim();
//     const bharti = parseFloat(document.getElementById('bharti').value) || 0;
//     const dar = parseFloat(document.getElementById('dar').value) || 0;
//     const tulaaiRate = parseFloat(document.getElementById('tulaaiRate').value) || 0;
//     const commRate = parseFloat(document.getElementById('commRate').value) || 0;

//     const advRakam = parseFloat(document.getElementById('advRakam').value) || 0;
//     const advMonths = parseFloat(document.getElementById('advMonths').value) || 0;
//     const advRate = parseFloat(document.getElementById('advRate').value) || 0;

//     let vajan = 0;
//     let fullBori = 0;
//     let paseri = 0;
//     let looseKg = 0;

//     // पसेरी लॉजिक: दशमलव के पहले वाला बोरी, और बाद वाला पसेरी
//     if (boriInput.includes('.')) {
//         const parts = boriInput.split('.');
//         fullBori = parseInt(parts[0]) || 0;
//         paseri = parseInt(parts[1]) || 0; 
//     } else {
//         fullBori = parseInt(boriInput) || 0;
//     }

//     const bori = parseFloat(boriInput) || 0;

//     if (!isManualVajan) {
//         const fullBoriKg = fullBori * bharti;
//         looseKg = paseri * 5; // 1 पसेरी = 5 किलो
//         vajan = (fullBoriKg + looseKg) / 100; 
        
//         if(boriInput !== '' || bharti > 0) {
//             document.getElementById('vajanInput').value = vajan.toFixed(2);
//         } else {
//             document.getElementById('vajanInput').value = '';
//         }
//     } else {
//         vajan = parseFloat(document.getElementById('vajanInput').value) || 0;
//     }

//     const rakam = vajan * dar;
    
//     // तुलाई कैलकुलेशन: अगर लूज़ माल आधी भर्ती या उससे ज़्यादा है, तो एक बोरी एक्स्ट्रा
//     let tulaaiBori = fullBori; 
//     if (looseKg > 0 && looseKg >= (bharti / 2)) {
//         tulaaiBori = fullBori + 1;
//     }
    
//     const tulaai = tulaaiBori * tulaaiRate;
//     const commission = (rakam * commRate) / 100;

//     const advInterest = (advRakam * advMonths * advRate) / 100;
//     const totalAdvanceDeduction = advRakam + advInterest;

//     const hasCrop = (rakam > 0 || vajan > 0);
//     const hasAdvance = (advRakam > 0);

//     // --- स्मार्ट विज़िबिलिटी ---
//     if (hasCrop) {
//         document.getElementById('cropResultBox').classList.remove('hidden');
        
//         document.getElementById('print_vajan_row').style.display = 'table-row';
//         document.getElementById('print_dar_row').style.display = 'table-row';
//         document.getElementById('print_rakam_row').style.display = 'table-row';
//         document.getElementById('print_tulaai_row').style.display = 'table-row';
//         document.getElementById('print_comm_row').style.display = 'table-row';
//         document.getElementById('print_crop_hr').style.display = 'table-row';
//     } else {
//         document.getElementById('cropResultBox').classList.add('hidden');
        
//         document.getElementById('print_vajan_row').style.display = 'none';
//         document.getElementById('print_dar_row').style.display = 'none';
//         document.getElementById('print_rakam_row').style.display = 'none';
//         document.getElementById('print_tulaai_row').style.display = 'none';
//         document.getElementById('print_comm_row').style.display = 'none';
//         document.getElementById('print_crop_hr').style.display = 'none';
//     }

//     let finalRakam = 0;
//     if (hasCrop) {
//         finalRakam = rakam - tulaai - commission - totalAdvanceDeduction;
//     } else if (hasAdvance) {
//         finalRakam = totalAdvanceDeduction;
//     }

//     document.getElementById('rakamTxt').innerText = Math.round(rakam).toLocaleString('en-IN');
//     document.getElementById('tulaaiLabel').innerText = `तुलाई (@ ₹${tulaaiRate}/बोरी):`;
//     document.getElementById('tulaaiTxt').innerText = Math.round(tulaai).toLocaleString('en-IN');
//     document.getElementById('commLabel').innerText = `खर्चा (@ ${commRate}%):`;
//     document.getElementById('commTxt').innerText = Math.round(commission).toLocaleString('en-IN');
    
//     const advBox = document.getElementById('advResultBox');
//     if (advRakam > 0) {
//         advBox.classList.remove('hidden'); 
//         document.getElementById('advRakamTxt').innerText = Math.round(advRakam).toLocaleString('en-IN');
//         document.getElementById('advInterestTxt').innerText = Math.round(advInterest).toLocaleString('en-IN');
//     } else {
//         advBox.classList.add('hidden'); 
//     }

//     document.getElementById('finalRakamTxt').innerText = Math.round(finalRakam).toLocaleString('en-IN');

//     document.getElementById('p_bori').innerText = bori;
//     document.getElementById('p_bharti').innerText = bharti;
//     document.getElementById('p_vajan').innerText = vajan.toFixed(2);
//     document.getElementById('p_dar').innerText = dar;
//     document.getElementById('p_rakam').innerText = Math.round(rakam);
//     document.getElementById('p_tulaai_label').innerText = "तुलाई (-):";
//     document.getElementById('p_tulaai').innerText = Math.round(tulaai);
//     document.getElementById('p_comm_label').innerText = "खर्चा (-):";
//     document.getElementById('p_comm').innerText = Math.round(commission);
    
//     const printAdvRow = document.getElementById('print_adv_row');
//     const printAdvIntRow = document.getElementById('print_adv_int_row');
    
//     if (advRakam > 0) {
//         printAdvRow.style.display = 'table-row';
//         document.getElementById('p_adv_rakam').innerText = Math.round(advRakam);
        
//         if(advInterest > 0) {
//             printAdvIntRow.style.display = 'table-row';
//             document.getElementById('p_adv_int_label').innerText = `ब्याज (@ ${advRate}% x ${advMonths} माह):`;
//             document.getElementById('p_adv_int').innerText = Math.round(advInterest);
//         } else {
//             printAdvIntRow.style.display = 'none';
//         }
//     } else {
//         printAdvRow.style.display = 'none';
//         printAdvIntRow.style.display = 'none';
//     }

//     document.getElementById('p_final').innerText = Math.round(finalRakam);
    
//     document.getElementById('print_bori_row').style.display = bori > 0 ? 'table-row' : 'none';
//     document.getElementById('print_bharti_row').style.display = bharti > 0 ? 'table-row' : 'none';
// }

// function printParchi() {
//     window.print();
// }

// function resetForm() {
//     document.getElementById('kisanName').value = '';
//     document.getElementById('bori').value = '';
//     document.getElementById('bharti').value = '';
//     document.getElementById('vajanInput').value = '';
//     document.getElementById('dar').value = '';
//     document.getElementById('advRakam').value = '';
//     document.getElementById('advMonths').value = '';
//     updateKisanName();
//     calculate(false);
//     document.getElementById('kisanName').focus();
// }

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault(); 
//         const activeId = document.activeElement.id;

//         function focusNext(nextId) {
//             const nextInput = document.getElementById(nextId);
//             if(nextInput) {
//                 nextInput.focus();
//                 nextInput.select(); 
//             }
//         }

//         if (activeId === 'kisanName') focusNext('bori');
//         else if (activeId === 'bori') focusNext('bharti');
//         else if (activeId === 'bharti') focusNext('vajanInput');
//         else if (activeId === 'vajanInput') focusNext('dar');
//         else if (activeId === 'dar') {
//             if(document.getElementById('advRakam').value === "") focusNext('advRakam');
//             else printParchi();
//         }
//         else if (activeId === 'advRakam') focusNext('advMonths');
//         else if (activeId === 'advMonths') focusNext('advRate');
//         else if (activeId === 'advRate') printParchi();
//     }
// });








document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('p_date').innerText = new Date().toLocaleDateString('en-IN');
});

function updateKisanName() {
    document.getElementById('p_name').innerText = document.getElementById('kisanName').value;
}

// --- PWA (Desktop/Mobile) Install Logic ---
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.classList.remove('hidden');
});

if (installBtn) {
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt !== null) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('App Successfully Installed!');
            }
            deferredPrompt = null;
            installBtn.classList.add('hidden');
        }
    });
}

window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    if (installBtn) installBtn.classList.add('hidden');
});

// --- Main Calculation Logic ---
function calculate(isManualVajan) {
    const bori = parseFloat(document.getElementById('bori').value) || 0;
    const bharti = parseFloat(document.getElementById('bharti').value) || 0;
    const dar = parseFloat(document.getElementById('dar').value) || 0;
    const tulaaiRate = parseFloat(document.getElementById('tulaaiRate').value) || 0;
    const commRate = parseFloat(document.getElementById('commRate').value) || 0;

    const advRakam = parseFloat(document.getElementById('advRakam').value) || 0;
    const advMonths = parseFloat(document.getElementById('advMonths').value) || 0;
    const advRate = parseFloat(document.getElementById('advRate').value) || 0;

    // --- मंडी का परफेक्ट पसेरी लॉजिक ---
    const fullBori = Math.floor(bori);
    
    // पॉइंट के बाद की वैल्यू को 100 से गुणा करना
    // (जैसे 30.11 का 0.11 * 100 = 11 पसेरी, 30.5 का 0.5 * 100 = 50 पसेरी, 30.05 का 0.05 * 100 = 5 पसेरी)
    const loosePaseri = Math.round((bori - fullBori) * 100); 

    let vajan = 0;

    if (!isManualVajan) {
        const fullBoriKg = fullBori * bharti;
        const looseKg = loosePaseri * 5; // हर पसेरी = 5 किलो
        
        vajan = (fullBoriKg + looseKg) / 100; 
        
        if (fullBori > 0 || loosePaseri > 0 || bharti > 0) {
            document.getElementById('vajanInput').value = vajan.toFixed(2);
        } else {
            document.getElementById('vajanInput').value = '';
        }
    } else {
        vajan = parseFloat(document.getElementById('vajanInput').value) || 0;
    }

    const rakam = vajan * dar;
    
    // --- तुलाई लॉजिक (5 पसेरी या उससे ज़्यादा होने पर 1 बोरी एक्स्ट्रा कटेगी) ---
    let tulaaiBori = fullBori; 
    if (loosePaseri >= 5) {
        tulaaiBori = fullBori + 1; 
    }
    
    const tulaai = tulaaiBori * tulaaiRate;
    const commission = (rakam * commRate) / 100;

    const advInterest = (advRakam * advMonths * advRate) / 100;
    const totalAdvanceDeduction = advRakam + advInterest;

    const hasCrop = (rakam > 0 || vajan > 0);
    const hasAdvance = (advRakam > 0);

    // स्मार्ट विज़िबिलिटी 
    if (hasCrop) {
        document.getElementById('cropResultBox').classList.remove('hidden');
        document.getElementById('print_vajan_row').style.display = 'table-row';
        document.getElementById('print_dar_row').style.display = 'table-row';
        document.getElementById('print_rakam_row').style.display = 'table-row';
        document.getElementById('print_tulaai_row').style.display = 'table-row';
        document.getElementById('print_comm_row').style.display = 'table-row';
        document.getElementById('print_crop_hr').style.display = 'table-row';
    } else {
        document.getElementById('cropResultBox').classList.add('hidden');
        document.getElementById('print_vajan_row').style.display = 'none';
        document.getElementById('print_dar_row').style.display = 'none';
        document.getElementById('print_rakam_row').style.display = 'none';
        document.getElementById('print_tulaai_row').style.display = 'none';
        document.getElementById('print_comm_row').style.display = 'none';
        document.getElementById('print_crop_hr').style.display = 'none';
    }

    let finalRakam = 0;
    if (hasCrop) {
        finalRakam = rakam - tulaai - commission - totalAdvanceDeduction;
    } else if (hasAdvance) {
        finalRakam = totalAdvanceDeduction;
    }

    document.getElementById('rakamTxt').innerText = Math.round(rakam).toLocaleString('en-IN');
    document.getElementById('tulaaiLabel').innerText = `तुलाई (@ ₹${tulaaiRate}/बोरी):`;
    document.getElementById('tulaaiTxt').innerText = Math.round(tulaai).toLocaleString('en-IN');
    document.getElementById('commLabel').innerText = `खर्चा (@ ${commRate}%):`;
    document.getElementById('commTxt').innerText = Math.round(commission).toLocaleString('en-IN');
    
    const advBox = document.getElementById('advResultBox');
    if (advRakam > 0) {
        advBox.classList.remove('hidden'); 
        document.getElementById('advRakamTxt').innerText = Math.round(advRakam).toLocaleString('en-IN');
        document.getElementById('advInterestTxt').innerText = Math.round(advInterest).toLocaleString('en-IN');
    } else {
        advBox.classList.add('hidden'); 
    }

    document.getElementById('finalRakamTxt').innerText = Math.round(finalRakam).toLocaleString('en-IN');

    // Print values update
    document.getElementById('p_bori').innerText = document.getElementById('bori').value; // जो टाइप किया है वही छपेगा
    document.getElementById('p_bharti').innerText = bharti;
    document.getElementById('p_vajan').innerText = vajan.toFixed(2);
    document.getElementById('p_dar').innerText = dar;
    document.getElementById('p_rakam').innerText = Math.round(rakam);
    document.getElementById('p_tulaai_label').innerText = "तुलाई (-):";
    document.getElementById('p_tulaai').innerText = Math.round(tulaai);
    document.getElementById('p_comm_label').innerText = "खर्चा (-):";
    document.getElementById('p_comm').innerText = Math.round(commission);
    
    const printAdvRow = document.getElementById('print_adv_row');
    const printAdvIntRow = document.getElementById('print_adv_int_row');
    
    if (advRakam > 0) {
        printAdvRow.style.display = 'table-row';
        document.getElementById('p_adv_rakam').innerText = Math.round(advRakam);
        
        if(advInterest > 0) {
            printAdvIntRow.style.display = 'table-row';
            document.getElementById('p_adv_int_label').innerText = `ब्याज (@ ${advRate}% x ${advMonths} माह):`;
            document.getElementById('p_adv_int').innerText = Math.round(advInterest);
        } else {
            printAdvIntRow.style.display = 'none';
        }
    } else {
        printAdvRow.style.display = 'none';
        printAdvIntRow.style.display = 'none';
    }

    document.getElementById('p_final').innerText = Math.round(finalRakam);
    
    document.getElementById('print_bori_row').style.display = (fullBori > 0 || loosePaseri > 0) ? 'table-row' : 'none';
    document.getElementById('print_bharti_row').style.display = bharti > 0 ? 'table-row' : 'none';
}

function printParchi() {
    window.print();
}

function resetForm() {
    document.getElementById('kisanName').value = '';
    document.getElementById('bori').value = '';
    document.getElementById('bharti').value = '';
    document.getElementById('vajanInput').value = '';
    document.getElementById('dar').value = '';
    document.getElementById('advRakam').value = '';
    document.getElementById('advMonths').value = '';
    updateKisanName();
    calculate(false);
    document.getElementById('kisanName').focus();
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        const activeId = document.activeElement.id;

        function focusNext(nextId) {
            const nextInput = document.getElementById(nextId);
            if(nextInput) {
                nextInput.focus();
                nextInput.select(); 
            }
        }

        if (activeId === 'kisanName') focusNext('bori');
        else if (activeId === 'bori') focusNext('bharti');
        else if (activeId === 'bharti') focusNext('vajanInput');
        else if (activeId === 'vajanInput') focusNext('dar');
        else if (activeId === 'dar') {
            if(document.getElementById('advRakam').value === "") focusNext('advRakam');
            else printParchi();
        }
        else if (activeId === 'advRakam') focusNext('advMonths');
        else if (activeId === 'advMonths') focusNext('advRate');
        else if (activeId === 'advRate') printParchi();
    }
});







// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('p_date').innerText = new Date().toLocaleDateString('en-IN');
// });

// function updateKisanName() {
//     document.getElementById('p_name').innerText = document.getElementById('kisanName').value;
// }

// // --- PWA (Desktop/Mobile) Install Logic ---
// let deferredPrompt;
// const installBtn = document.getElementById('installBtn');

// window.addEventListener('beforeinstallprompt', (e) => {
//     e.preventDefault();
//     deferredPrompt = e;
//     if (installBtn) installBtn.classList.remove('hidden');
// });

// if (installBtn) {
//     installBtn.addEventListener('click', async () => {
//         if (deferredPrompt !== null) {
//             deferredPrompt.prompt();
//             const { outcome } = await deferredPrompt.userChoice;
//             if (outcome === 'accepted') {
//                 console.log('App Successfully Installed!');
//             }
//             deferredPrompt = null;
//             installBtn.classList.add('hidden');
//         }
//     });
// }

// window.addEventListener('appinstalled', () => {
//     deferredPrompt = null;
//     if (installBtn) installBtn.classList.add('hidden');
// });

// // --- Main Calculation Logic ---
// function calculate(isManualVajan) {
//     const boriStr = document.getElementById('bori').value || "0";
//     const bharti = parseFloat(document.getElementById('bharti').value) || 0;
//     const dar = parseFloat(document.getElementById('dar').value) || 0;
//     const tulaaiRate = parseFloat(document.getElementById('tulaaiRate').value) || 0;
//     const commRate = parseFloat(document.getElementById('commRate').value) || 0;

//     const advRakam = parseFloat(document.getElementById('advRakam').value) || 0;
//     const advMonths = parseFloat(document.getElementById('advMonths').value) || 0;
//     const advRate = parseFloat(document.getElementById('advRate').value) || 0;

//     let fullBori = 0;
//     let loosePaseri = 0;

//     if (boriStr.includes('.')) {
//         const parts = boriStr.split('.');
//         fullBori = parseInt(parts[0]) || 0;
//         loosePaseri = parseInt(parts[1]) || 0;
//     } else {
//         fullBori = parseInt(boriStr) || 0;
//     }

//     let vajan = 0;

//     if (!isManualVajan) {
//         const fullBoriKg = fullBori * bharti;
//         // पॉइंट के बाद की वैल्यू को 100 से गुणा करना
//         const calculatedPaseri = Math.round((parseFloat(boriStr) - fullBori) * 100); 
//         const looseKg = calculatedPaseri * 5; 
        
//         vajan = (fullBoriKg + looseKg) / 100; 
        
//         if (fullBori > 0 || calculatedPaseri > 0 || bharti > 0) {
//             // फालतू 0 हटाने के लिए parseFloat का इस्तेमाल
//             document.getElementById('vajanInput').value = parseFloat(vajan.toFixed(2));
//         } else {
//             document.getElementById('vajanInput').value = '';
//         }
//     } else {
//         vajan = parseFloat(document.getElementById('vajanInput').value) || 0;
//     }

//     const rakam = vajan * dar;
    
//     // तुलाई लॉजिक (5 पसेरी या ज़्यादा पर)
//     const calculatedPaseriForTulaai = Math.round((parseFloat(boriStr) - fullBori) * 100);
//     let tulaaiBori = fullBori; 
//     if (calculatedPaseriForTulaai >= 5) {
//         tulaaiBori = fullBori + 1; 
//     }
    
//     const tulaai = tulaaiBori * tulaaiRate;
//     const commission = (rakam * commRate) / 100;

//     const advInterest = (advRakam * advMonths * advRate) / 100;
//     const totalAdvanceDeduction = advRakam + advInterest;

//     const hasCrop = (rakam > 0 || vajan > 0);
//     const hasAdvance = (advRakam > 0);

//     // स्मार्ट विज़िबिलिटी 
//     if (hasCrop) {
//         document.getElementById('cropResultBox').classList.remove('hidden');
//         document.getElementById('print_vajan_row').style.display = 'table-row';
//         document.getElementById('print_dar_row').style.display = 'table-row';
//         document.getElementById('print_rakam_row').style.display = 'table-row';
//         document.getElementById('print_tulaai_row').style.display = 'table-row';
//         document.getElementById('print_comm_row').style.display = 'table-row';
//         document.getElementById('print_crop_hr').style.display = 'table-row';
//     } else {
//         document.getElementById('cropResultBox').classList.add('hidden');
//         document.getElementById('print_vajan_row').style.display = 'none';
//         document.getElementById('print_dar_row').style.display = 'none';
//         document.getElementById('print_rakam_row').style.display = 'none';
//         document.getElementById('print_tulaai_row').style.display = 'none';
//         document.getElementById('print_comm_row').style.display = 'none';
//         document.getElementById('print_crop_hr').style.display = 'none';
//     }

//     let finalRakam = 0;
//     if (hasCrop) {
//         finalRakam = rakam - tulaai - commission - totalAdvanceDeduction;
//     } else if (hasAdvance) {
//         finalRakam = totalAdvanceDeduction;
//     }

//     document.getElementById('rakamTxt').innerText = Math.round(rakam).toLocaleString('en-IN');
//     document.getElementById('tulaaiLabel').innerText = `तुलाई (@ ₹${tulaaiRate}/बोरी):`;
//     document.getElementById('tulaaiTxt').innerText = Math.round(tulaai).toLocaleString('en-IN');
//     document.getElementById('commLabel').innerText = `खर्चा (@ ${commRate}%):`;
//     document.getElementById('commTxt').innerText = Math.round(commission).toLocaleString('en-IN');
    
//     const advBox = document.getElementById('advResultBox');
//     if (advRakam > 0) {
//         advBox.classList.remove('hidden'); 
//         document.getElementById('advRakamTxt').innerText = Math.round(advRakam).toLocaleString('en-IN');
//         document.getElementById('advInterestTxt').innerText = Math.round(advInterest).toLocaleString('en-IN');
//     } else {
//         advBox.classList.add('hidden'); 
//     }

//     document.getElementById('finalRakamTxt').innerText = Math.round(finalRakam).toLocaleString('en-IN');

//     // Print values update
//     document.getElementById('p_bori').innerText = document.getElementById('bori').value; 
//     document.getElementById('p_bharti').innerText = bharti;
//     // यहाँ भी फालतू 0 हटाने के लिए parseFloat इस्तेमाल किया गया है
//     document.getElementById('p_vajan').innerText = parseFloat(vajan.toFixed(2));
//     document.getElementById('p_dar').innerText = dar;
//     document.getElementById('p_rakam').innerText = Math.round(rakam);
//     document.getElementById('p_tulaai_label').innerText = "तुलाई (-):";
//     document.getElementById('p_tulaai').innerText = Math.round(tulaai);
//     document.getElementById('p_comm_label').innerText = "खर्चा (-):";
//     document.getElementById('p_comm').innerText = Math.round(commission);
    
//     const printAdvRow = document.getElementById('print_adv_row');
//     const printAdvIntRow = document.getElementById('print_adv_int_row');
    
//     if (advRakam > 0) {
//         printAdvRow.style.display = 'table-row';
//         document.getElementById('p_adv_rakam').innerText = Math.round(advRakam);
        
//         if(advInterest > 0) {
//             printAdvIntRow.style.display = 'table-row';
//             document.getElementById('p_adv_int_label').innerText = `ब्याज (@ ${advRate}% x ${advMonths} माह):`;
//             document.getElementById('p_adv_int').innerText = Math.round(advInterest);
//         } else {
//             printAdvIntRow.style.display = 'none';
//         }
//     } else {
//         printAdvRow.style.display = 'none';
//         printAdvIntRow.style.display = 'none';
//     }

//     document.getElementById('p_final').innerText = Math.round(finalRakam);
    
//     const calculatedPaseriForPrint = Math.round((parseFloat(boriStr) - fullBori) * 100);
//     document.getElementById('print_bori_row').style.display = (fullBori > 0 || calculatedPaseriForPrint > 0) ? 'table-row' : 'none';
//     document.getElementById('print_bharti_row').style.display = bharti > 0 ? 'table-row' : 'none';
// }

// function printParchi() {
//     window.print();
// }

// function resetForm() {
//     document.getElementById('kisanName').value = '';
//     document.getElementById('bori').value = '';
//     document.getElementById('bharti').value = '';
//     document.getElementById('vajanInput').value = '';
//     document.getElementById('dar').value = '';
//     document.getElementById('advRakam').value = '';
//     document.getElementById('advMonths').value = '';
//     updateKisanName();
//     calculate(false);
//     document.getElementById('kisanName').focus();
// }

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault(); 
//         const activeId = document.activeElement.id;

//         function focusNext(nextId) {
//             const nextInput = document.getElementById(nextId);
//             if(nextInput) {
//                 nextInput.focus();
//                 nextInput.select(); 
//             }
//         }

//         if (activeId === 'kisanName') focusNext('bori');
//         else if (activeId === 'bori') focusNext('bharti');
//         else if (activeId === 'bharti') focusNext('vajanInput');
//         else if (activeId === 'vajanInput') focusNext('dar');
//         else if (activeId === 'dar') {
//             if(document.getElementById('advRakam').value === "") focusNext('advRakam');
//             else printParchi();
//         }
//         else if (activeId === 'advRakam') focusNext('advMonths');
//         else if (activeId === 'advMonths') focusNext('advRate');
//         else if (activeId === 'advRate') printParchi();
//     }
// });