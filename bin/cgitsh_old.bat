FOR /F %%x IN ('sh -c pwd') DO sh -l -c 'cd %%x; export CHERE_INVOKING=1; exec sh --login - "%~dp0git\%1.sh" %2 %3'