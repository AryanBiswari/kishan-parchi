document.getElementById('p_date').innerText = new Date().toLocaleDateString('en-IN');

        function updateKisanName() {
            document.getElementById('p_name').innerText = document.getElementById('kisanName').value;
        }

        function calculate(isManualVajan) {
            const bori = parseFloat(document.getElementById('bori').value) || 0;
            const bharti = parseFloat(document.getElementById('bharti').value) || 0;
            const dar = parseFloat(document.getElementById('dar').value) || 0;
            const tulaaiRate = parseFloat(document.getElementById('tulaaiRate').value) || 0;
            const commRate = parseFloat(document.getElementById('commRate').value) || 0;

            // New Advance Inputs
            const advRakam = parseFloat(document.getElementById('advRakam').value) || 0;
            const advMonths = parseFloat(document.getElementById('advMonths').value) || 0;
            const advRate = parseFloat(document.getElementById('advRate').value) || 0;

            let vajan = 0;
            const fullBori = Math.floor(bori);
            const fraction = bori - fullBori;

            if (!isManualVajan) {
                const fullBoriKg = fullBori * bharti;
                const looseKg = fraction * 50; 
                vajan = (fullBoriKg + looseKg) / 100; 
                if(bori > 0 || bharti > 0) {
                    document.getElementById('vajanInput').value = vajan.toFixed(2);
                } else {
                    document.getElementById('vajanInput').value = '';
                }
            } else {
                vajan = parseFloat(document.getElementById('vajanInput').value) || 0;
            }

            const rakam = vajan * dar;
            
            // Tulaai Logic
            let tulaaiBori = fullBori; 
            if (fraction >= 0.5) tulaaiBori = fullBori + 1;
            else if (fraction > 0) tulaaiBori = fullBori;
            
            const tulaai = tulaaiBori * tulaaiRate;
            const commission = (rakam * commRate) / 100;

            // --- Advance Interest Logic ---
            // Formula: (रकम * महीने * दर) / 100
            const advInterest = (advRakam * advMonths * advRate) / 100;
            const totalAdvanceDeduction = advRakam + advInterest;

            // Final Rakam Deduction
            const finalRakam = rakam - tulaai - commission - totalAdvanceDeduction;

            // Update UI Details
            document.getElementById('rakamTxt').innerText = Math.round(rakam);
            document.getElementById('tulaaiLabel').innerText = `तुलाई (@ ₹${tulaaiRate}/बोरी):`;
            document.getElementById('tulaaiTxt').innerText = Math.round(tulaai);
            document.getElementById('commLabel').innerText = `कमीशन (@ ${commRate}%):`;
            document.getElementById('commTxt').innerText = Math.round(commission);
            
            // Show/Hide Advance Box in UI
            const advBox = document.getElementById('advResultBox');
            if (advRakam > 0) {
                advBox.style.display = 'block';
                document.getElementById('advRakamTxt').innerText = Math.round(advRakam);
                document.getElementById('advInterestTxt').innerText = Math.round(advInterest);
            } else {
                advBox.style.display = 'none';
            }

            document.getElementById('finalRakamTxt').innerText = Math.round(finalRakam);

            // Update Print Details
            document.getElementById('p_bori').innerText = bori;
            document.getElementById('p_bharti').innerText = bharti;
            document.getElementById('p_vajan').innerText = vajan.toFixed(2);
            document.getElementById('p_dar').innerText = dar;
            document.getElementById('p_rakam').innerText = Math.round(rakam);
            document.getElementById('p_tulaai_label').innerText = `तुलाई (@ ₹${tulaaiRate}):`;
            document.getElementById('p_tulaai').innerText = Math.round(tulaai);
            document.getElementById('p_comm_label').innerText = `कमीशन (@ ${commRate}%):`;
            document.getElementById('p_comm').innerText = Math.round(commission);
            
            // Advance Print Handling
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
            
            document.getElementById('print_bori_row').style.display = bori > 0 ? 'table-row' : 'none';
            document.getElementById('print_bharti_row').style.display = bharti > 0 ? 'table-row' : 'none';
        }

        function printParchi() {
            if (!document.getElementById('kisanName').value) {
                alert("कृपया किसान का नाम दर्ज करें!");
                return;
            }
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

        // Enter Key Navigation Flow
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                const activeId = document.activeElement.id;

                function focusNext(nextId) {
                    const nextInput = document.getElementById(nextId);
                    nextInput.focus();
                    nextInput.select(); 
                }

                // Keyboard Sequence
                if (activeId === 'kisanName') focusNext('bori');
                else if (activeId === 'bori') focusNext('bharti');
                else if (activeId === 'bharti') focusNext('vajanInput');
                else if (activeId === 'vajanInput') focusNext('dar');
                else if (activeId === 'dar') {
                    // अगर एडवांस लेना है तो आगे बढ़ें, नहीं तो सीधा प्रिंट करें
                    if(document.getElementById('advRakam').value === "") {
                        focusNext('advRakam');
                    } else {
                        printParchi();
                    }
                }
                else if (activeId === 'advRakam') focusNext('advMonths');
                else if (activeId === 'advMonths') focusNext('advRate');
                else if (activeId === 'advRate') printParchi();
            }
        });