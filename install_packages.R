# install_packages.R - Run this once to set up Python environment
library(reticulate)
virtualenv_create("IntroRPython4DS")
use_virtualenv("IntroRPython4DS")

# Install needed Python packages 
py_install(c(
  "pandas",
  "numpy", 
  "matplotlib",
  "seaborn",
  "plotly",
  "scikit-learn",
  "jupyter"
))
