#!/bin/bash

files=(
  "src/components/MainLayout/ThemeToggler/ThemeToggler.js"
  "src/index.js"
  "src/App.js"
  "src/styles/theme.js"
  "src/redux/store.js"
  "src/redux/auth/authSlice.js"
  "src/redux/auth/operations.js"
  "src/redux/auth/selectors.js"
  
)
> buffer.txt
for file in "${files[@]}"
do
  echo "// $file" >> buffer.txt
  if [[ $file == *.js ]]; then
    cat "$file" >> buffer.txt
  else
    cat "$file" >> buffer.txt
  fi
done

cat buffer.txt | pbcopy

# > buffer.txt
# for file in "${files[@]}"
# do
#   echo "// $file" >> buffer.txt
#   if [[ $file == *.js ]]; then
#     uglifyjs "$file" >> buffer.txt
#   else
#     cat "$file" >> buffer.txt
#   fi
# done

# cat buffer.txt | pbcopy
