#!/bin/bash

files=(
  "src/App.js"
  "src/components/CalendarPage/index.js"
  "src/components/CalendarPage/ChoosedMonth/CalendarTable/CalendarTable.js"
  "src/components/CalendarPage/ChoosedMonth/ChoosedMonth/ChoosedMonth.js"
  "src/components/CalendarPage/ChoosedMonth/ChoosedMonth/MonthCalendarHead/MonthCalendarHead.js"
  "src/components/CalendarPage/ChoosedDay/ChoosedDay/ChoosedDay.js"
  "src/components/CalendarPage/CalendarToolbar/CalendarToolbar/CalendarToolbar.js"
  "src/components/CalendarPage/CalendarToolbar/PeriodPaginator/PeriodPaginator.js"
  "src/components/CalendarPage/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect.js"
  "src/pages/CalendarPage.js"
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
