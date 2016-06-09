# Simple examples of regression using R

  x <- 1:10
  y <- c(3,4,6,3,2,7,5,4,3,1)
  regression <- lm(y ~ x)
  summary(regression)
  
 # Call:
 # lm(formula = y ~ x)
 # Residuals:
 #    Min     1Q Median     3Q    Max 
 # -2.146 -1.345 -0.300  1.204  3.273 
 # Coefficients:
 # Estimate Std. Error t value Pr(>|t|)  
 # (Intercept)   4.6000     1.2747   3.609  0.00689 **
 # x            -0.1455     0.2054  -0.708  0.49903
 # Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
 #
 # Residual standard error: 1.866 on 8 degrees of freedom
 # Multiple R-squared:  0.05897,   Adjusted R-squared:  -0.05866
 # F-statistic: 0.5013 on 1 and 8 DF,  p-value: 0.499
