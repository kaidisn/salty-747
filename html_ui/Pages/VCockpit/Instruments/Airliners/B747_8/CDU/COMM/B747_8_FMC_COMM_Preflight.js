class FMC_COMM_Preflight {
    static ShowPage(fmc) {
		fmc.activeSystem = "FMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["PREFLIGHT"],
				["\xa0UPLINK", ""],
				["<RTE 1", "POS REPORT>"],
				["\xa0UPLINK (2)", ""],
				["<ALTN", ""],
				["", ""],
				["<PERF", "FREE TEXT>"],
				["", ""],
				["<TAKEOFF", "CLEARANCE>"],
				["", ""],
				["<WIND", "VOICE>"],
				["", "DATA LINK", "__FMCSEPARATOR"],
				["<DES FORECAST", "READY"]
			]);
		}
		updateView();
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
    }
}